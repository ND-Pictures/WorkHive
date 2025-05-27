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
        SqlConnection conn =  new SqlConnection(@"Data Source=MSI;Initial Catalog=WorkHive;Integrated Security=True;");
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
            this.Close();
        }

        private void btn_Signin_Click(object sender, EventArgs e)
        {
                
                string query1 = "Select*From Data_User where ID_User= '" + input_ID.Text + "' and Password='" + input_Password.Text + "' and Role='Manager'";
                string query2 = "Select*From Data_User where ID_User= '" + input_ID.Text + "' and Password='" + input_Password.Text + "'";
                SqlDataAdapter sda1 = new SqlDataAdapter(query1, conn);
                SqlDataAdapter sda2 = new SqlDataAdapter(query2, conn);
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
                MessageBox.Show("Eror");
                }
        }
    }
}
