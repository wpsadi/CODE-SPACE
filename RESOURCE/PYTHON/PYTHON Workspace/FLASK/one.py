from flask import *
app=Flask(__name__)

@app.route("/")
def hello():
    return render_template('index.html')

@app.route("/login")
def login():
    # topic=input().strip()
    topic="hello"
    return render_template('login.html',topic=topic)
app.run(debug=True)
