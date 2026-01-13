document.addEventListener("DOMContentLoaded", () => {
    const editionSelect = document.getElementById("choixEdition");
    const editionImage = document.getElementById("editionImage");
    const editionPlatform = document.getElementById("choixPlat");
    const editionBTN = document.getElementById("btn_achat");
    const achatModal = document.getElementById('AchatModal');
    const achatLinksContainer = document.getElementById('achatLinksContainer');
    const btnAchat = document.getElementById('btn_achat');
    const youtubeModal = document.getElementById('youtubeModal');
    const youtubeIframe = document.getElementById('youtubeIframe');
    const playButton = document.getElementById("playButton");
    const poster = document.getElementById("posterContainer");
    const video = document.getElementById("videoIframe");

    const images = {
        0: "images/img_standard.jpg",
        1: "images/img_Deluxe.jpg",
        2: "images/img_collector.jpg"
    };

    const txt_btn_achat = {
        0: "Acheter en dématérialiser",
        1: "Acheter en physique",
        2: "Acheter en physique"
    }

    const achatLinks = {
        0: { // Standard
            0: [ // PC : dématérialisé uniquement
                { label: "Steam", url: "https://store.steampowered.com/app/1903340/Clair_Obscur_Expedition_33/" },
                { label: "Epic Games Store", url: "https://store.epicgames.com/fr/p/expedition-33-b3240d" },
                { label: "Game Pass", url: "https://www.xbox.com/fr-fr/games/store/clair-obscur-expedition-33/9ppt8k6gqhrz" }
            ],
            1: [ // PS5 : physique
                { label: "Fnac", url: "https://www.fnac.com/a21094823/Clair-Obscur-Expedition-33-PS5-Jeu-video-Playstation-5" },
                { label: "Amazon", url: "https://www.amazon.fr/Clair-Obscur-Expedition-33-PS5/dp/B0DNQV6FZP/ref=sr_1_1?crid=10XZIL546ZNQ3&dib=eyJ2IjoiMSJ9.ZN6JvVNxJ-nXrEzGTHP2BPSDwkkcmH_Sc5MvSxO6DSGQLzr67SOufLWLbngqYpcwKV86HbyQFC6eAlOA6K_d8VLyxvEdgb76DvMRvi-0IOOWJRElYSwecgWg7i5Z9qHRaO2FrASe057IkpEQ3PWZ9EexZSczsseVyAgSuTCCYPHNUqHx-CbdCJqr0KksF0ddcJBq8O3wD-8CkB_GKnKBFo82Vhsbz6H0DTGCcSRqL4XyxgszgItZwTKm1CeH1RnOiFb0dvKro8KFCxE-h6DmMOLXzmaDLQO_Q3apDTK4enw.sOJ7RJAK550yOyXjGk8JAQriSypPzIYxhukr-enT57o&dib_tag=se&keywords=clair%2Bobscur%2Bexpedition%2B33&qid=1748353735&sprefix=Clair%2Caps%2C79&sr=8-1&th=1" },
                { label: "Micromania", url: "https://www.micromania.fr/clair-obscur-expedition-33-146311.html" }
            ],
            2: [ // Xbox : physique
                { label: "Fnac", url: "https://www.fnac.com/a21094825/Clair-Obscur-Expedition-33-Xbox-Series-X-Jeu-video-Xbox-Series" },
                { label: "Amazon", url: "https://www.amazon.fr/Clair-Obscur-Expedition-33-Xbox/dp/B0DK61BM3R/ref=sr_1_3?crid=10XZIL546ZNQ3&dib=eyJ2IjoiMSJ9.ZN6JvVNxJ-nXrEzGTHP2BPSDwkkcmH_Sc5MvSxO6DSGQLzr67SOufLWLbngqYpcwKV86HbyQFC6eAlOA6K_d8VLyxvEdgb76DvMRvi-0IOOWJRElYSwecgWg7i5Z9qHRaO2FrASe057IkpEQ3PWZ9EexZSczsseVyAgSuTCCYPHNUqHx-CbdCJqr0KksF0ddcJBq8O3wD-8CkB_GKnKBFo82Vhsbz6H0DTGCcSRqL4XyxgszgItZwTKm1CeH1RnOiFb0dvKro8KFCxE-h6DmMOLXzmaDLQO_Q3apDTK4enw.sOJ7RJAK550yOyXjGk8JAQriSypPzIYxhukr-enT57o&dib_tag=se&keywords=clair+obscur+expedition+33&qid=1748353735&sprefix=Clair%2Caps%2C79&sr=8-3" },
                { label: "Micromania", url: "https://www.micromania.fr/clair-obscur-expedition-33-146313.html" }
            ]
        },
        1: { // Deluxe (dematérialisé)
            0: [
                { label: "Steam", url: "https://store.steampowered.com/app/1903340/Clair_Obscur_Expedition_33/" },
                { label: "Epic Games Store", url: "https://store.epicgames.com/fr/p/expedition-33-b3240d" }
            ],
            1: [
                { label: "Playstation Store", url: "https://store.playstation.com/fr-fr/product/EP7579-PPSA17599_00-EXP33DX000000PS5" },
            ],
            2: [
                { label: "XBOX Store", url: "https://www.xbox.com/fr-FR/games/store/clair-obscur-expedition-33-deluxe-edition/9N2VXS6JVJW9/0010" },
            ]
        },
        2: { // Collector (physique)
            0: [
                { label: "SOLD OUT", url: "https://www.expedition33.com/collectors-edition" }
            ],
            1: [
                { label: "SOLD OUT", url: "https://www.expedition33.com/collectors-edition" }
            ],
            2: [
                { label: "SOLD OUT", url: "https://www.expedition33.com/collectors-edition" }
            ]
        }
    };

    //Change the image from the edition select
    editionSelect.addEventListener("change", (e) => {
        const selectedValue = e.target.value;
        editionImage.src = images[selectedValue];
    });

    //Change the button text from the edition select
    editionPlatform.addEventListener("change", (e) => {
        const selectedValue = e.target.value;
        editionBTN.textContent = txt_btn_achat[selectedValue];
    });


    // Show the modal with the correct links when the button is clicked
    youtubeModal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget;
        const videoUrl = button.getAttribute('data-video');
        youtubeIframe.src = videoUrl;
    });

    youtubeModal.addEventListener('hidden.bs.modal', function () {
        youtubeIframe.src = '';
    });

    playButton.addEventListener("click", function () {
        playButton.style.display = "none";
        poster.style.display = "none";
        video.style.display = "block";
    });


    // Show the modal with the correct links when the button is clicked
    btnAchat.addEventListener('click', function () {
        const edition = document.getElementById("choixEdition").value;
        const platform = document.getElementById("choixPlat").value;
        const links = achatLinks[edition][platform];

        achatLinksContainer.innerHTML = links.map(link =>
            `<a href="${link.url}" target="_blank" class="btn btn-warning btn-lg mb-2">${link.label}</a>`
        ).join("<br>");
        const modal = new bootstrap.Modal(achatModal);
        modal.show();
    });
});