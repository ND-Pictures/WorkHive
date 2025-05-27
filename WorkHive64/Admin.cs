using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WorkHive64
{
    public partial class Admin : Form
    {
        SqlConnection conn = new SqlConnection(@"Data Source=MSI;Initial Catalog=WorkHive;Integrated Security=True;");
        SqlDataReader rdr = null;
       
        SqlCommand cmd = new SqlCommand();
        public Admin()
        {
            InitializeComponent();
            LoadData();
        }
        public void LoadData()
        {
            conn.Open();
            cmd = new SqlCommand("Select ID_User, Username, image, role from Data_User where ID_User='" + Login.ID_Gobal + "'", conn);
            rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                label4.Text = rdr.GetValue(0).ToString();
                label3.Text = rdr.GetValue(1).ToString();
                label6.Text = rdr.GetValue(3).ToString();
                MemoryStream ms = new MemoryStream((byte[])rdr.GetValue(2));
                ProfilePicture.Image = Image.FromStream(ms);

            }
        }


        private void Admin_Load(object sender, EventArgs e)
        {

        }

        private void label3_Click(object sender, EventArgs e)
        {

        }

        private void btn_ChangeProfilePicture_Click(object sender, EventArgs e)
        {

        }
    }
}
