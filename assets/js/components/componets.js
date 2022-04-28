
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";


function startFirebase (){
	  const firebaseConfig = {
	    apiKey: "AIzaSyAsiHiMM67vEopm-FpXH4gYfnjCKKBwE5I",
	    authDomain: "latin-cripto-house.firebaseapp.com",
	    projectId: "latin-cripto-house",
	    storageBucket: "latin-cripto-house.appspot.com",
	    messagingSenderId: "608771784556",
	    appId: "1:608771784556:web:b8ed2bdeb5e7af07397d49"
	  };
	
	  // Initialize Firebase
	  const app = initializeApp(firebaseConfig);
	  return app;
}

export { startFirebase}
