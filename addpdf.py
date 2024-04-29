import sqlite3


def add_pdf(title, file_path):
    conn = sqlite3.connect('pdf_database.db')
    c = conn.cursor()
    c.execute('INSERT INTO pdfs (title, file_path) VALUES (?, ?)', (title, file_path))
    conn.commit()
    conn.close()

add_pdf("Crowdstrike Holdings Inc. Report 2024" , "Report pdfs/CWRD Report (1).pdf")