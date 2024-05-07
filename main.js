/* // SupportRequest class
class SupportRequest {
    constructor() {
        this.name = '';
        this.email = '';
        this.issueDescription = '';
        this.ticketNumber = '';
        this.summary = '';
    }

    submit(formData) {
        // Call the server to submit the form data and generate a support ticket summary
        // Example: this.ticketNumber = server.submitSupportRequest(formData).ticketNumber;
        // Example: this.summary = server.submitSupportRequest(formData).summary;
    }
}

// TicketManager class
class TicketManager {
    constructor() {
        this.openTickets = [];
    }

    addTicket(ticket) {
        this.openTickets.push(ticket);
    }

    searchByName(name) {
        // Call the server to search for open tickets by name
        // Example: return server.searchTicketsByName(name);
    }

    searchByNumber(ticketNumber) {
        // Call the server to search for an open ticket by number
        // Example: return server.searchTicketsByNumber(ticketNumber);
    }
} */

// SupportRequest class
class SupportRequest {
    constructor() {
        this.name = '';
        this.email = '';
        this.issueDescription = '';
        this.ticketNumber = '';
        this.summary = '';
    }

    submit(formData) {
        // Simulated server call to submit support request
        this.ticketNumber = 'TK12345'; // Simulated ticket number
        this.summary = 'Support ticket created successfully.'; // Simulated summary
    }
}

// TicketManager class
class TicketManager {
    constructor() {
        this.openTickets = [];
    }

    addTicket(ticket) {
        this.openTickets.push(ticket);
    }

    searchByName(name) {
        // Simulated server call to search tickets by name
        return [
            {
                ticketNumber: 'TK12345',
                summary: 'Issue with network connectivity.'
            },
            {
                ticketNumber: 'TK67890',
                summary: 'Software installation problem.'
            }
        ];
    }

    searchByNumber(ticketNumber) {
        // Simulated server call to search ticket by number
        return {
            ticketNumber: 'TK12345',
            summary: 'Issue with network connectivity.'
        };
    }
}

// Instantiate SupportRequest and TicketManager objects
const supportRequest = new SupportRequest();
const ticketManager = new TicketManager();

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(event.target); // Get form data
    supportRequest.submit(formData); // Submit support request
    printTicketSummary(); // Print ticket summary
}

// Function to print ticket summary
function printTicketSummary() {
    const ticketSummary = `${supportRequest.summary}\nTicket Number: ${supportRequest.ticketNumber}`;
    console.log(ticketSummary); // Simulated printing
}

// Function to search tickets by name
function searchTicketsByName() {
    const name = document.getElementById('searchByName').value;
    const matchingTickets = ticketManager.searchByName(name);
    console.log(matchingTickets);
}

// Function to search ticket by number
function searchTicketByNumber() {
    const ticketNumber = document.getElementById('searchByNumber').value;
    const matchingTicket = ticketManager.searchByNumber(ticketNumber);
    console.log(matchingTicket);
}


