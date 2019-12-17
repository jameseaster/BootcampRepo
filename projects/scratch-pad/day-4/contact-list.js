// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    const contact = {'id': id, 'nameFirst': nameFirst, 'nameLast': nameLast};
    return contact;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        
        // takes an object, adds it to contacts, then returns contacts
        addContact: function(contact) {
            return contacts.push(contact);
        },
        
        // takes a full name string, returns the object of the contact name
        findContact: function(fullName) {
            
            // splits the name into first and last
            const name = fullName.split(' ');
            const first = name[0];
            const last = name[1];
            
            // searches to match the first and last name to the objects
            for(let i = 0; i < contacts.length; i++){
                if(contacts[i].nameFirst === first && contacts[i].nameLast === last){
                    
                    // returns contact if matched
                    return contacts[i];
                }
            }
            
            // returns undefined if no contacts were matched to the search
            return undefined;
        },
        
        // finds the contact via their id # and removes that specific contact
        removeContact: function(contact) {
            for(let i = 0; i < contacts.length; i++){
                if(contact.id === contacts[i].id){
                    return contacts.splice(i, 1);
                }
            }
        },
        
        // prints all contact names
        printAllContactNames(){
            
            // an array to store the names
            const allContacts = [];
            
            // loops through the array of contacts
            for(let i = 0; i < contacts.length; i++){
                
                // formats the contact name to a first and last name as one string
                let contactName = contacts[i].nameFirst + ' ' + contacts[i].nameLast;
                
                // pushes full name to allContacts array
                allContacts.push(contactName);
            }
            
            // returns all contacts as a string replacing the `,` with the newline character
            return  allContacts.toString().replace(/,/g, '\n');
        }
    };
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
