using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WorkHive64
{
    public partial class Employee : Form
    {
        SqlConnection conn = new SqlConnection(@"Data Source=MSI;Initial Catalog=WorkHive;Integrated Security=True;");
        SqlDataReader rdr = null;

        SqlCommand cmd = new SqlCommand();
        public Employee()
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
        private void Employee_Load(object sender, EventArgs e)
        {

        }

        private void btn_ChangeProfilePicture_Click(object sender, EventArgs e)
        {
            openFileDialog1.Filter = "select image(*.JpG; *.png; *.Gif;*.JpeG)|*.JpG; *.png; *.Gif;*.JpeG";
            if(openFileDialog1.ShowDialog() == DialogResult.OK)
            {
                ProfilePicture.Image = Image.FromFile(openFileDialog1.FileName);
            }

        }

        private void btn_DeleteProfilePicture_Click(object sender, EventArgs e)
        {
            conn.Close();
            conn.Open();
            cmd = new SqlCommand("update Data_User set Image=@image where ID_User = '"+Login.ID_Gobal+"'",conn) ;
            MemoryStream mor = new MemoryStream();
            ProfilePicture.Image.Save(mor,ProfilePicture.Image.RawFormat);
            cmd.Parameters.AddWithValue("image", mor.ToArray());
            
            cmd.ExecuteNonQuery();
            conn.Close();
        }
    }
}
