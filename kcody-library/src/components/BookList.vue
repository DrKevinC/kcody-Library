<script setup>
import { ref, onMounted } from 'vue';
import db from '@/firebase/init';
import { collection, query, where, getDocs, deleteDoc, doc, setDoc, orderBy, limit } from 'firebase/firestore';
const books = ref([]);
const limitNum = ref(100);
const order = ref('isbn');
const selectedBook = ref({
    display: false,
    id: '',
    name: '',
    isbn: 0
});

const fetchBooks = async () => {
    try {
        const q = query(collection(db, 'books'), where('isbn', '>', 1000), orderBy(order.value), limit(limitNum.value));
        const querySnapshot = await getDocs(q);
        const booksArray = [];
        querySnapshot.forEach((doc) => {
            booksArray.push({id: doc.id, ...doc.data() });
        });
        books.value = booksArray;
    } catch (error) {
        console.error('Error fetching books: ', error)
    }
}

const deleteBook = async (id) => {
    try {
        await deleteDoc(doc(db, "books", id));
    } catch (error) {
        console.error('Error Deleting book: ', error)
    }
    fetchBooks() // update the component data
}

const checkLimit = () => {
    if (limitNum.value > 100 || limitNum.value < 0){
        limitNum.value = 100
    }
    fetchBooks()
}

const setOrder = (newOrder) => {
    order.value = newOrder;
    fetchBooks();
}

const selectBook = (new_id, new_isbn, new_name) => {
    selectedBook.value = {
        id: new_id,
        isbn: new_isbn,
        name: new_name,
        display: true
    }
}

const cancelSelectBook = () => {
    selectedBook.value = {
        display: false,
        id: '',
        name: '',
        isbn: 0
    }
}

const updateBook = async () => {
    try { await setDoc(doc(db, "books", selectedBook.value.id), {
            isbn: selectedBook.value.isbn,
            name: selectedBook.value.name
        });
    } catch (error) {
        console.error("Error Updating book: ", error)
    }
    cancelSelectBook()
    fetchBooks() // update the component data
}

onMounted(() => {
    fetchBooks();
})
</script>

<template>
    <div>
        <h1>Books with ISBN > 1000</h1>
    </div>
    <div>ORDER BY:
        <button @click="setOrder('name')">Name</button>
        <button @click="setOrder('isbn')">ISBN</button>
    </div>
    <div>
        <label for="limit">Limit Search Returns (1-100)</label>
        <input type="number" id="limit" 
        name="limit" min="1" max="100"
        v-model="limitNum" />
        <button @click="checkLimit()" >Submit</button>
    </div>
    <ul>
        <li v-for="book in books" :key="book.id">
            {{  book.name  }} - ISBN: {{ book.isbn }}
            <button @click="deleteBook(book.id)">Remove Book</button>
            <button @click="selectBook(book.id, book.isbn, book.name)">Select Book</button>"
        </li>
    </ul>
    <div v-if="selectedBook.display">
        <h2>Selected Book</h2>
        <label for="isbnMod">New ISBN: </label>
        <input type="number"
            id="isbnMod"
            v-model="selectedBook.isbn">
        <br/>
        <label for="nameMod">New Name: </label>
        <input type="text"
            id="nameMod"
            v-model="selectedBook.name">
        <br/>
        <button @click="updateBook()">Submit Changes</button>
        <button @click="cancelSelectBook()">Cancel</button>
    </div>
</template>