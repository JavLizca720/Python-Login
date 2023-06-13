from pickle import FALSE
from tabnanny import check
from flask import Flask
from flask_bcrypt import Bcrypt
from flask import render_template,request,redirect,url_for,flash, session
from datetime import datetime
import os
from flask import send_from_directory
from flaskext.mysql import MySQL

app = Flask(__name__)
bcrypt = Bcrypt(app)

app.secret_key="Caos720"


mysql = MySQL()
app.config['MYSQL_DATABASE_HOST']='localhost'
app.config['MYSQL_DATABASE_USER']='root'
app.config['MYSQL_DATABASE_PASSWORD']='12345'
app.config['MYSQL_DATABASE_DB']='loginpython720'

mysql.init_app(app)

LANG = os.path.join('static/js')
app.config['LANG']=LANG

@app.route('/static/js/<name>')
def lang(name):
    return send_from_directory(app.config['LANG'],name)

@app.route('/')
def index():
    return render_template("/index.html")

@app.route('/login', methods=["GET", "POST"])
def login():
     if 'login' in session:
        return redirect(url_for('index'))
     
     if request.method == 'POST':
        username=request.form['username']
        password=request.form['password']
        _pw_hash = bcrypt.generate_password_hash(password)
        sql="SELECT id, name, username, password FROM users WHERE username = %s"
        data=(username,)
        conn = mysql.connect()
        cursor=conn.cursor()
        cursor.execute(sql, data)
        conn.commit()
        conn.close()
        row = cursor.fetchone()

        if row != None:
            user = [row[0], row[1], row[2], row[3]]
            if username == row[2] and bcrypt.check_password_hash(row[3], password) ==True:
                session["login"]=True
                session["id"]=row[0]
                session["name"]=row[1]
                session["username"]=row[2]
                session["password"]=row[3]
                return redirect('/')
            
            elif username != row[2]:
                message='Invalid username'
                flash(message)
                return render_template('/login.html')
            
            elif bcrypt.check_password_hash(row[3], password) == False:
                message='Incorrect password'
                flash(message)
                return render_template('/login.html')
        else:
               message='Invalid username'
               flash(message)
               return render_template('/login.html')
     else:
        message='incorrect data'
        return render_template('/login.html')
            
     #return render_template('/login.html')

@app.route('/register')
def register():
    if 'login' in session:
        return redirect(url_for('index'))
    return render_template("/register.html")

@app.route('/store_user', methods=['GET', 'POST'])
def storage_user():
    _name=request.form['name']
    _username=request.form['username']
    _password=request.form['password']
    _pw_hash = bcrypt.generate_password_hash(_password)

    sql="SELECT * FROM users WHERE username = %s"
    data=(_username)
    conn = mysql.connect()
    cursor=conn.cursor()
    cursor.execute(sql, data)
    conn.commit()
    conn.close()
    row = cursor.fetchone()

    if row != None:
        user =[ row[0], row[1], row[2], row[3]]
        flash('User already exists')
        return redirect(url_for('register'))
    
    else:
        sql="INSERT INTO users(`id`, `name`, `username`, `password`) VALUES (NULL, %s, %s, %s);"
        data=(_name, _username, _pw_hash)
        conn = mysql.connect()
        cursor=conn.cursor()
        cursor.execute(sql, data)
        conn.commit()

        return redirect('/')
    

@app.route('/close')
def close():
    session.clear()
    return redirect('/')


if __name__=='__main__':
        app.run(debug=True)
