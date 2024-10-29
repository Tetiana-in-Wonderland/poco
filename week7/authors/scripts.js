let authors = [
    {
        firstName: 'Andreas',
        lastName: 'Neeser'
    },
    {
        firstName: 'Anna',
        lastName: 'Ruchat'
    },
    {
        firstName: 'Arno',
        lastName: 'Camenisch'
    },
    {
        firstName: 'Barbara',
        lastName: 'Schibli'
    },
    {
        firstName: 'Demian',
        lastName: 'Leinhard'
    },
    {
        firstName: 'Flurina',
        lastName: 'Bader'
    },
    {
        firstName: 'Franco',
        lastName: 'Supino'
    },
    {
        firstName: 'Lukas',
        lastName: 'Hartmann'
    },
    {
        firstName: 'Marius',
        lastName: 'Popescu'
    },
    {
        firstName: 'Reto',
        lastName: 'Haenny'
    },
    {
        firstName: 'Sandra',
        lastName: 'Kuenzi'
    },
    {
        firstName: 'Simon',
        lastName: 'Libsig'
    }
];

const authorPhotos = document.querySelectorAll('main ul li');

authorPhotos.forEach((li) => {

    const img = li.querySelector('img');
    if (img) {
        // Extract the image name from the src attribute
        const imgName = img.src.split('/').pop();
        
        const imgAuthorName = imgName.replace("tile_", "").replace(".jpg", "");

        // Find the author in the authors array matching the filename
        const author = authors.find(author =>
            `${author.firstName.toLowerCase()}_${author.lastName.toLowerCase()}` === imgAuthorName
        );

        if (author) {
            // Create a new <h2> element for displaying the author name
            const authorName = document.createElement('h2');
            authorName.textContent = `${author.firstName} ${author.lastName}`;
            
            // Append the author name <h2> to the <li> element
            li.appendChild(authorName);
            
            // Set the title attribute of the <img> element
            img.alt = `${author.firstName} ${author.lastName}`;
            img.title = `${author.firstName} ${author.lastName}`;
        }
    }
});

