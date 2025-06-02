using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Data.SqlClient;
using System.Diagnostics;

namespace WorkHive64
{
    public partial class Logs : Form
    {
        public Logs()
        {
            InitializeComponent();
        }

        private void Logs_Load(object sender, EventArgs e)
        {
            // Ganti dengan koneksi kamu sendiri
            string connectionString = @"Data Source=DESKTOP-BG9BHI8\SQLEXPRESS;Initial Catalog=WorkHive;Integrated Security=True";

            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                try
                {
                    conn.Open();
                    string query = "SELECT Log_ID, Table_Name, Action_Type, Action_Time FROM Logs ORDER BY Action_Time DESC";

                    SqlDataAdapter da = new SqlDataAdapter(query, conn);
                    DataTable dt = new DataTable();
                    da.Fill(dt);

                    dataGrid_Logs.DataSource = dt;
                }
                catch (Exception ex)
                {
                    MessageBox.Show("Gagal load data Logs: " + ex.Message);
                }
            }
        }


        private void dataGrid_Logs_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }

        private void label2_Click(object sender, EventArgs e)
        {

        }

        private void btn_Home_Click(object sender, EventArgs e)
        {
            Admin a = new Admin();
            a.Show();
            this.Hide();

        }

        private void button1_Click(object sender, EventArgs e)
        {
            Admin_Project P= new Admin_Project();
            P.Show();
            this.Hide();
        }

        private void btn_ManageEmployee_Click(object sender, EventArgs e)
        {
            Admin_User U = new Admin_User();
            U.Show();
            this.Hide();
        }

        private void btn_Back_Click(object sender, EventArgs e)
        {
            Home h = new Home();
            h.Show();
            this.Hide();

        }

        private void btn_Exit_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }
    }
}
