const readline = require('readline');

const contacts = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const showMenu = () => {
    console.log('\n📞 Contact Manager');
    console.log('1. Add a contact');
    console.log('2. View all contacts');
    console.log('3. Search for a contact');
    console.log('4. Exit');
    rl.question('\nChoose an option (1-4): ', handleMenu);
};

const handleMenu = (choice) => {
    switch (choice.trim()) {
        case '1':
            addContact();
            break;
        case '2':
            viewContacts();
            break;
        case '3':
            searchContact();
            break;
        case '4':
            console.log('👋 Exiting... Goodbye!');
            rl.close();
            break;
        default:
            console.log('❌ Invalid option. Try again.');
            showMenu();
    }
};

const addContact = () => {
    rl.question('Enter contact name: ', (name) => {
        rl.question('Enter phone number: ', (phone) => {
            contacts.push({ name, phone });
            console.log(`✅ Contact added: ${name} - ${phone}`);
            showMenu();
        });
    });
};

const viewContacts = () => {
    if (contacts.length === 0) {
        console.log('📭 No contacts found.');
    } else {
        console.log('\n📋 All Contacts:');
        contacts.forEach((contact, index) => {
            console.log(`${index + 1}. ${contact.name} - ${contact.phone}`);
        });
    }
    showMenu();
};

const searchContact = () => {
    rl.question('Enter name to search: ', (searchName) => {
        const contact = contacts.find(c => c.name.toLowerCase() === searchName.toLowerCase());
        if (contact) {
            console.log(`🔍 Found: ${contact.name} - ${contact.phone}`);
        } else {
            console.log('❌ Contact not found.');
        }
        showMenu();
    });
};

showMenu();