import "./style/style.css";
import $ from "jquery";
import "./component/head-app.js";

const bookSearch = () => {
  const search = document.getElementById("inputItem");
  search.value;
  const hasil = document.getElementById("searchResult");
  hasil.innerHTML = "";

  const APIAddress = "https://www.googleapis.com/books/v1/volumes?q=";

  $.ajax({
    url: APIAddress + search.value,
    dataType: "json",
    success: (hasilCari) => {
      let buku = hasilCari.items;
      if (hasilCari.totalItems >= 1) {
        $.each(buku, (i, detail) => {
          $("#searchResult").append(`
            <div id="daftarHasil">
              <img src="${detail.volumeInfo.imageLinks.thumbnail}" alt="${detail.volumeInfo.title}" />
              <div class="detailHasil">
                <h3>${detail.volumeInfo.title}</h3>
                <p><b>Authors</b> : ${detail.volumeInfo.authors}</p>
                <p><b>Date</b> : ${detail.volumeInfo.publishedDate}</p>
                <p><b>Categories</b> : ${detail.volumeInfo.categories}</p>
                <p><b>Publishere</b> : ${detail.volumeInfo.publishere}</p>
                <p><b>Page Count</b> : ${detail.volumeInfo.pageCount}</p>
              </div>                        
            </div>
          `);
        });
      } else {
        $("#searchResult").html(`
          <div class="error">
            <h2>Not found!</h2>
            <p>The book you are looking for could not be found, please enter the keywords correctly.</p>
          </div>
        `);
      }
    },
    error: (error) => {
      console.error("Error:", error); // Menampilkan pesan kesalahan jika ada masalah dengan permintaan API
    },
    type: "GET",
  });
};

const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", bookSearch, false);
