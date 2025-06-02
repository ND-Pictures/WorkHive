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
        SqlConnection conn = new SqlConnection(@"Data Source=DESKTOP-BG9BHI8\SQLEXPRESS;Initial Catalog=WorkHive;Integrated Security=True;");
        SqlDataReader rdr = null;
       
        SqlCommand cmd = new SqlCommand();
        public Admin()
        {
            InitializeComponent();
            LoadData();
        }
        public void LoadData()
        {
            try
            {
                conn.Open();

                // Load User Info
                cmd = new SqlCommand("SELECT ID, name, image, role FROM Users WHERE ID = @id", conn);
                cmd.Parameters.AddWithValue("@id", Login.ID_Gobal);

                rdr = cmd.ExecuteReader();
                if (rdr.Read())
                {
                    label4.Text = rdr["ID"].ToString();
                    label3.Text = rdr["name"].ToString();
                    label6.Text = rdr["role"].ToString();

                    if (!rdr.IsDBNull(rdr.GetOrdinal("image")))
                    {
                        byte[] imgBytes = (byte[])rdr["image"];
                        using (MemoryStream ms = new MemoryStream(imgBytes))
                        {
                            ProfilePicture.Image = Image.FromStream(ms);
                        }
                    }
                   
                }
                rdr.Close(); // tutup reader sebelum query berikutnya

                // Load Project Info ke DataGrid
                string projectQuery = @"
            SELECT 
                P.Project_name,
                P.Start_date,
                P.End_date,
                P.Status,
                U.name AS Assigned_To
            FROM Project P
            INNER JOIN Users U ON P.Assigned_to = U.ID";

                SqlDataAdapter adapter = new SqlDataAdapter(projectQuery, conn);
                DataTable dt = new DataTable();
                adapter.Fill(dt);

                dataGrid_Project.DataSource = dt;
            }
            catch (Exception ex)
            {
                MessageBox.Show("Terjadi kesalahan saat memuat data: " + ex.Message);
            }
            finally
            {
                conn.Close();
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

        private void btn_Exit_Click(object sender, EventArgs e)
        {
            Application.Exit();

        }

        private void btn_ChangeProfilePicture_Click_1(object sender, EventArgs e)
        {
            using (OpenFileDialog openFileDialog = new OpenFileDialog())
            {
                openFileDialog.Title = "Pilih Gambar";
                openFileDialog.Filter = "Image Files (*.jpg;*.jpeg;*.png;*.bmp)|*.jpg;*.jpeg;*.png;*.bmp";

                if (openFileDialog.ShowDialog() == DialogResult.OK)
                {
                    string filePath = openFileDialog.FileName;

                    // Tampilkan gambar ke PictureBox
                    ProfilePicture.Image = Image.FromFile(filePath);

                    // Ubah gambar ke bentuk byte[] untuk disimpan ke database
                    byte[] imageBytes = File.ReadAllBytes(filePath);

                    // Simpan ke database
                    try
                    {
                        using (SqlConnection conn = new SqlConnection(@"Data Source=DESKTOP-BG9BHI8\SQLEXPRESS;Initial Catalog=WorkHive;Integrated Security=True;"))
                        {
                            string query = "UPDATE Users SET image = @image WHERE ID = @id";

                            using (SqlCommand cmd = new SqlCommand(query, conn))
                            {
                                cmd.Parameters.AddWithValue("@image", imageBytes);
                                cmd.Parameters.AddWithValue("@id", Login.ID_Gobal);

                                conn.Open();
                                int rowsAffected = cmd.ExecuteNonQuery();
                                conn.Close();

                                if (rowsAffected > 0)
                                {
                                    MessageBox.Show("Foto profil berhasil diperbarui!");
                                }
                                else
                                {
                                    MessageBox.Show("Gagal memperbarui foto.");
                                }
                            }
                        }
                    }
                    catch (Exception ex)
                    {
                        MessageBox.Show("Terjadi kesalahan: " + ex.Message);
                    }
                }
            }
        }

        private void dataGrid_Project_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }

        private void btn_ManageProject_Click(object sender, EventArgs e)
        {
            Admin_Project p = new Admin_Project();
            p.Show();
            this.Hide();
        }

        private void btn_ManageEmployee_Click(object sender, EventArgs e)
        {
            Admin_User A=new Admin_User();
            A.Show();
            this.Hide();
        }

        private void btn_Logs_Click(object sender, EventArgs e)
        {
            Logs l =new Logs();
            l.Show();
            this.Hide();
        }

        private void btn_Back_Click(object sender, EventArgs e)
        {
            Home h = new Home();
            h.Show();
            this.Hide();
        }
    }
}
