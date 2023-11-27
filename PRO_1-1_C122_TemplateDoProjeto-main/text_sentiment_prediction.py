import pandas as pd
import numpy as np
import tensorflow.keras
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import load_model

train_data = pd.read_csv("./static/assets/data_files/updated_product_dataset.csv")
training_sentences = []

for i in range(len(train_data)):
    sentence = train_data.loc[i, "Text"]
    training_sentences.append(sentence)

model = load_model("./static/assets/model_files/sentiment_analysis_model.h5")

vocab_size = 40000
max_length = 100
trunc_type = "post"
padding_type = "post"
oov_tok = "<OOV>"

tokenizer = Tokenizer(num_words=vocab_size, oov_token=oov_tok)
tokenizer.fit_on_texts(training_sentences)


# dicionário onde chave: emoção, valor: lista
encode_emotions = {
                    "Neutra": [0,"./static/assets/emoticons/neutral.png"],
                    "Positiva": [1,"./static/assets/emoticons/positive.png"],
                    "Negativa": [2,"./static/assets/emoticons/negative.png"]
                    }


def predict(text):

    sentiment = ""
    emoji_url = ""
    customer_review = []
    customer_review.append(text)
    sequences = tokenizer.texts_to_sequences(customer_review)
    padded = pad_sequences(sequences, maxlen=max_length, padding=padding_type, truncating=trunc_type)
    result = model.predict(padded)
    label = np.argmax(result , axis=1)
    label = int(label)

    # extraindo a emoção e a url do dicionário
    for emotion in encode_emotions:
        if encode_emotions[emotion][0]  ==  label:
            sentiment = emotion
            emoji_url = encode_emotions[emotion][1]

    return sentiment , emoji_url