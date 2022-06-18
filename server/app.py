from flask import Flask,request,Response, jsonify
import numpy as np
import pandas as pd
import pickle
from flask_cors import CORS

import json

# Loading treatment recommendation model
treatment_recommendation_model_path = 'models/treatment_recommendation_model.pkl'
treatment_recommendation_model = pickle.load(
    open(treatment_recommendation_model_path, 'rb'))


# Loading a MinMaxScaler used while training the model
scaler_path = 'models/scaler.pkl'
scaler = pickle.load(
    open(scaler_path, 'rb'))

# Opening JSON file

feat_val_dict = {}
with open('./data/feat_val_map.json') as json_file:
    feat_val_dict = json.load(json_file)

encoding_dict = {}
with open('./data/encoding_map.json') as json_file:
    encoding_dict = json.load(json_file)

# Encode and SCale input data
def encode_and_scale_data(df):
    for feature in df:
        if(feature=='Age'):continue
        mapping = encoding_dict[feature]
        df[feature] = [mapping[df.iloc[0][feature]]]

    a = scaler.transform([[df.iloc[0]['Age']]])[0]
    df['Age'] = [a];


app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return 'Hello World!!!'

@app.route('/treatment_recommendation',methods=['POST'])
def mental_health_treatment_prediction():
    request_data = request.get_json();

    input_df = pd.DataFrame();
    for feature,_ in feat_val_dict.items():
        input_df[feature] = [request_data[feature]];

    input_df['Age'] = [float(request_data['age'])]

    encode_and_scale_data(input_df)

    prediction = treatment_recommendation_model.predict(input_df)

    res = int(prediction[0])
    print(res);
    return jsonify({'treatment':res})


if __name__ == '__main__':
    app.run(debug=True)