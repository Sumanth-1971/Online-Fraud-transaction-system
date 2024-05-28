// script.js
async function predictFraud() {
    const step = document.getElementById('step').value;
    const type = document.getElementById('type').value;
    const amount = document.getElementById('amount').value;
    const nameOrig = document.getElementById('nameOrig').value;
    const oldbalanceOrg = document.getElementById('oldbalanceOrg').value;
    const newbalanceOrig = document.getElementById('newbalanceOrig').value;
    const nameDest = document.getElementById('nameDest').value;
    const oldbalanceDest = document.getElementById('oldbalanceDest').value;
    const newbalanceDest = document.getElementById('newbalanceDest').value;
    const isFlaggedFraud = document.getElementById('isFlaggedFraud').value;

    const transactionData = {
        step,
        type,
        amount,
        nameOrig,
        oldbalanceOrg,
        newbalanceOrig,
        nameDest,
        oldbalanceDest,
        newbalanceDest,
        isFlaggedFraud
    };

    try {
        const response = await fetch('http://localhost:5000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transactionData)
        });
        const result = await response.json();
        document.getElementById('result').innerText = `Prediction: ${result.isFraud}`;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'An error occurred. Please try again.';
    }
}
