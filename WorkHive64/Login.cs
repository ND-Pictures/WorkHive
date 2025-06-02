using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WorkHive64
{

    
    public partial class Login : Form
    {
        SqlConnection conn =  new SqlConnection(@"Data Source=DESKTOP-BG9BHI8\SQLEXPRESS;Initial Catalog=WorkHive;Integrated Security=True;");
        SqlCommand cmd = new SqlCommand();
        SqlDataAdapter SDA;
        DataTable dt;
        public static string ID_Gobal="";

        public Login()
        {
            InitializeComponent();
        }

        private void btn_Exit_Click(object sender, EventArgs e)
        {
            Application.Exit();

        }

        private void btn_Signin_Click(object sender, EventArgs e)
        {
            try
            {
                string query1 = "SELECT * FROM Users WHERE ID = @ID AND Password = @Password AND Role = 'Manager'";
                string query2 = "SELECT * FROM Users WHERE ID = @ID AND Password = @Password";

                SqlDataAdapter sda1 = new SqlDataAdapter(query1, conn);
                SqlDataAdapter sda2 = new SqlDataAdapter(query2, conn);

                sda1.SelectCommand.Parameters.AddWithValue("@ID", input_ID.Text);
                sda1.SelectCommand.Parameters.AddWithValue("@Password", input_Password.Text);

                sda2.SelectCommand.Parameters.AddWithValue("@ID", input_ID.Text);
                sda2.SelectCommand.Parameters.AddWithValue("@Password", input_Password.Text);

                DataTable dataTable1 = new DataTable();
                DataTable dataTable2 = new DataTable();

                sda1.Fill(dataTable1);
                sda2.Fill(dataTable2);

                if (dataTable1.Rows.Count > 0)
                {
                    Home h = new Home();
                    ID_Gobal = input_ID.Text;
                    h.Show();
                    this.Hide();
                }
                else if (dataTable2.Rows.Count > 0)
                {
                    Employee_Home b = new Employee_Home();
                    ID_Gobal = input_ID.Text;
                    b.Show();
                    this.Hide();
                }
                else
                {
                    MessageBox.Show("ID atau Password yang Anda masukkan tidak valid. Silakan coba lagi.", "Login Gagal", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Terjadi kesalahan saat mencoba login. Silakan coba beberapa saat lagi." , "Kesalahan", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }

        }
    }
}
