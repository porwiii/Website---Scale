let currentPage = 1;
const totalPages = 3;

function showPage(pageNumber) {
   
    if (pageNumber < 1 || pageNumber > totalPages) {
        return;
    }

    for (let i = 1; i <= totalPages; i++) {
        const page = document.getElementById(`page${i}`);
        page.style.display = (i === pageNumber) ? 'block' : 'none';
    }

    
    currentPage = pageNumber;
    
    
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    if (currentPage === 1) {
        prevButton.classList.remove("show"); 
    } else {
        prevButton.classList.add("show"); 
    }

    nextButton.style.display = currentPage === totalPages ? "none" : "inline-block";
}

function nextPage() {
    if (currentPage < totalPages) {
        showPage(currentPage + 1);
    }
}

function prevPage() {
    if (currentPage > 1) {
        showPage(currentPage - 1);
    }
}


document.addEventListener("DOMContentLoaded", () => {
    showPage(currentPage);
});



function toggleText() {
    const textContent = document.getElementById('text-content');
    const extraContent = textContent.querySelector('.extra-content');
    const button = document.getElementById('toggle-btn');
    
    if (extraContent.style.display === 'none' || extraContent.style.display === '') {
        extraContent.style.display = 'inline';
        button.innerText = 'Hide';
    } else {
        extraContent.style.display = 'none';
        button.innerText = 'Read more';
    }
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!emailPattern.test(emailInput.value)) {
        event.preventDefault(); 
        emailError.textContent = 'Wprowadź poprawny adres e-mail'; 
        emailInput.focus(); 
    } else {
        emailError.textContent = ''; 
    }
});


