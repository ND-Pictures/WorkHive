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
        SqlConnection conn = new SqlConnection(@"Data Source=DESKTOP-BG9BHI8\SQLEXPRESS;Initial Catalog=WorkHive;Integrated Security=True;");
        SqlDataReader rdr = null;

        SqlCommand cmd = new SqlCommand();
        public Employee()
        {
            InitializeComponent();
            LoadData();
        }

        public void LoadData()
        {
            try
            {
                conn.Open();
                cmd = new SqlCommand("SELECT ID, name, image, role FROM Users WHERE ID = @id", conn);
                cmd.Parameters.AddWithValue("@id", Login.ID_Gobal);  // gunakan parameter untuk keamanan SQL Injection

                rdr = cmd.ExecuteReader();
                while (rdr.Read())
                {
                    label4.Text = rdr.GetValue(0).ToString();
                    label3.Text = rdr.GetValue(1).ToString();
                    label6.Text = rdr.GetValue(3).ToString();

                    // Cek apakah kolom image NULL
                    if (!rdr.IsDBNull(2))
                    {
                        byte[] imgBytes = (byte[])rdr.GetValue(2);
                        using (MemoryStream ms = new MemoryStream(imgBytes))
                        {
                            ProfilePicture.Image = Image.FromStream(ms);
                        }
                    }
                    
                }

            }
            catch (Exception ex)
            {
                MessageBox.Show("Terjadi kesalahan: " + ex.Message);
            }
            finally
            {
                rdr?.Close();
                conn.Close();
            }
            LoadProjectData();
        }
        private void Employee_Load(object sender, EventArgs e)
        {

        }
        private void LoadProjectData()
        {
            try
            {
                conn.Open();

                string query = @"
            SELECT 
                P.Project_name,
                P.Start_date,
                P.End_date,
                P.Status
            FROM Project P
            WHERE P.Assigned_to = @id";

                SqlCommand cmd = new SqlCommand(query, conn);
                cmd.Parameters.AddWithValue("@id", Login.ID_Gobal);

                SqlDataAdapter adapter = new SqlDataAdapter(cmd);
                DataTable dt = new DataTable();
                adapter.Fill(dt);

                dataGrid_Project.DataSource = dt;
            }
            catch (Exception ex)
            {
                MessageBox.Show("Gagal memuat data proyek: " + ex.Message);
            }
            finally
            {
                conn.Close();
            }
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

        private void btn_ManageProject_Click(object sender, EventArgs e)
        {
            Employee_Project a = new Employee_Project();
            a.Show();
            this.Hide();


        }

        private void btn_Exit_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void btn_Back_Click(object sender, EventArgs e)
        {
            Employee_Home x = new Employee_Home();
            x.Show();
            this.Hide();
        }
    }
}
