from flask import Flask, render_template, send_from_directory
import sqlite3

app = Flask(__name__)

@app.route('/')
def index():
    conn = sqlite3.connect('pdf_database.db')
    c = conn.cursor()
    c.execute('SELECT id, title FROM pdfs')
    pdfs = c.fetchall()
    conn.close()
    return render_template('reports.html', pdfs=pdfs)

@app.route('/pdf/<int:pdf_id>')
def pdf(pdf_id):
    conn = sqlite3.connect('pdf_database.db')
    c = conn.cursor()
    c.execute('SELECT file_path FROM pdfs WHERE id = ?', (pdf_id,))
    file_path = c.fetchone()[0]
    conn.close()
    return send_from_directory(directory='', filename=file_path, as_attachment=True)

if __name__ == "__main__":
    app.run(debug=True)