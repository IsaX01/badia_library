// import { _createBook, _updateBook, _removeBook } from './booksSlice';
// const host = "10.0.0.7";
const host = "192.168.1.164";

export const createLoan = async (loanData) => {
    try {
        const response = await fetch(`http://${host}:8080/api/loans`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loanData),
        });

        if (response.status === 201) {
            const createdLoan = await response.json();
            // dispatch(_createBook(createdBook));
            console.log('Loan created successfully:', createdLoan);
            return true;
        } else {
            const errorMessage = response.data.message || 'Error Loan book';
            console.error('Loan book error:', errorMessage);
            return false;
        }
    } catch (error) {
        console.error('Error during Loan book:', error);
    }
};


export const getAllLoans = async () => {
    try {
        const response = await fetch(`http://${host}:8080/api/loans`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status === 200) {
            const loans = response.json();
            console.log('Fetched all loans:', loans);
            return loans;
        } else {
            const errorMessage = response.data.message || 'Error fetching loans';
            console.error('Get loans error:', errorMessage);
        }
    } catch (error) {
        console.error('Error during get loans:', error);
    }
};

export const getloanById = async (loansId) => {
    try {
        const response = await fetch(`http://${host}:8080/api/loans/${loansId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ loanData }),
        });
        if (response.status === 200) {
            const loan = response.data; 
            console.log('Fetched loan:', loan);
            
        } else if (response.status === 404) {
            console.log(`loan not found with ID: ${loansId}`);
     
        } else {
            const errorMessage = response.data.message || 'Error fetching loan';
            console.error('Get loan error:', errorMessage);
          
        }
    } catch (error) {
        console.error('Error during get loan:', error);
 
    }
};


export const updateLoan = async (loanId, updatedLoanData) => {
    try {
      const response = await fetch(`http://${host}:8080/api/loans/${loanId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedLoanData),
      });
  
      if (response.status === 200) {
        const updatedloan = await response.json();
        // dispatch(_updateBook({ id: updatedloan.id, updatedloan }));
        console.log('Loan updated successfully:', updatedloan);
        return updatedloan;
      } else if (response.status === 404) {
        console.error(`Loan not found with ID: ${loanId}`);
      } else {
        const errorMessage = await response.text();
        console.error('Update Loan error:', errorMessage);
      }
    } catch (error) {
      console.error('Error during update Loan:', error);   
    }
  };

 export const deleteLoan = async (loanId) => {
    try {
      const response = await fetch(`http://${host}:8080/api/loans/${loanId}`, {
        method: 'DELETE',
      });
  
      if (response.status === 204) {
        console.log(`Loan with ID: ${loanId} deleted successfully`);
        return true;
      } else if (response.status === 404) {
        console.error(`Loan not found with ID: ${loanId}`);
        return false;
      } else {
        const errorMessage = await response.text();
        console.error('Delete Loan error:', errorMessage);
        return false;
      }
    } catch (error) {
      console.error('Error during delete Loan:', error);
    }
  };