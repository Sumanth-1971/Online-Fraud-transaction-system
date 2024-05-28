# app.py
import pickle
from flask import Flask, request, jsonify

app = Flask(__name__)

# Load the trained model
with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    features = [data['type'], data['amount'], data['oldbalanceOrg'], data['newbalanceOrig']]
    prediction = model.predict([features])
    return jsonify({'isFraud': 'Fraud' if prediction[0] == 1 else 'No Fraud'})

if __name__ == '__main__':
    app.run(debug=True)
