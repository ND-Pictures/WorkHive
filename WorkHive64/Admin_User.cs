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
    public partial class Admin_User : Form
    {
        public Admin_User()
        {
            InitializeComponent();
            LoadUserData();
            Enable(false);
        }
        public void Enable(bool a)
        {
        btn_Delete.Enabled = a;
            btn_Edit.Enabled = a;
            btn_Insert.Enabled = a;
        }
        private void dataGrid_User_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            if (e.RowIndex >= 0)
            {
                DataGridViewRow row = dataGrid_User.Rows[e.RowIndex];

                input_UserID.Text = row.Cells["ID"].Value.ToString();
                input_Username.Text = row.Cells["name"].Value.ToString();
                input_Password.Text = row.Cells["password"].Value.ToString();
                input_Role.Text = row.Cells["role"].Value.ToString();

                // Load gambar dari kolom image
                if (row.Cells["image"].Value != DBNull.Value)
                {
                    byte[] imgBytes = (byte[])row.Cells["image"].Value;
                    using (MemoryStream ms = new MemoryStream(imgBytes))
                    {
                        ProfilePicture.Image = Image.FromStream(ms);
                    }
                }
                else
                {
                    ProfilePicture.Image = null;
                }
            }
        }

        private void LoadUserData()
        {
            string connString = @"Data Source=DESKTOP-BG9BHI8\SQLEXPRESS;Initial Catalog=WorkHive;Integrated Security=True;";

            using (SqlConnection conn = new SqlConnection(connString))
            {
                try
                {
                    conn.Open();
                    string query = @"
                SELECT 
                    ID,
                    name,
                    password,
                    role,
                    image
                FROM Users
                WHERE role != 'Manager'";

                    SqlDataAdapter adapter = new SqlDataAdapter(query, conn);
                    DataTable dt = new DataTable();
                    adapter.Fill(dt);

                    dataGrid_User.DataSource = dt;

                    // Tampilkan gambar sebagai image
                    if (!dataGrid_User.Columns.Contains("image")) return;

                    DataGridViewImageColumn imgCol = new DataGridViewImageColumn();
                    imgCol = (DataGridViewImageColumn)dataGrid_User.Columns["image"];
                    imgCol.ImageLayout = DataGridViewImageCellLayout.Zoom;
                }
                catch (Exception ex)
                {
                    MessageBox.Show("Gagal memuat data user: " + ex.Message);
                }
            }
        }


        private void btn_Home_Click(object sender, EventArgs e)
        {
            Admin a = new Admin();
            a.Show();
            this.Hide();
        }

        private void btn_ManageProject_Click(object sender, EventArgs e)
        {
            Admin_Project p = new Admin_Project();
            p.Show();
            this.Hide();
        }

        private void btn_Logs_Click(object sender, EventArgs e)
        {
            Logs l = new Logs();
            l.Show();
            this.Hide();
        }

        private void btn_Exit_Click(object sender, EventArgs e)
        {
            Application.Exit();

        }

        private void btn_Back_Click(object sender, EventArgs e)
        {
            Home h = new Home();
            h.Show();
            this.Hide();
        }

        private void input_Password_TextChanged(object sender, EventArgs e)
        {

        }

        private void Admin_User_Load(object sender, EventArgs e)
        {

        }
        private void ClearInput()
        {
            input_UserID.Clear();
            input_Username.Clear();
            input_Password.Clear();
            input_Role.Clear();
            ProfilePicture.Image = null;
        }


        private void btn_ChooseImage_Click(object sender, EventArgs e)
        {
            using (OpenFileDialog ofd = new OpenFileDialog())
            {
                ofd.Title = "Pilih Gambar";
                ofd.Filter = "Image Files|*.jpg;*.jpeg;*.png;*.bmp";

                if (ofd.ShowDialog() == DialogResult.OK)
                {
                    // Tampilkan gambar di PictureBox
                    ProfilePicture.Image = Image.FromFile(ofd.FileName);
                }
            }
        }

        private void btn_Insert_Click(object sender, EventArgs e)
        {
            string connString = @"Data Source=DESKTOP-BG9BHI8\SQLEXPRESS;Initial Catalog=WorkHive;Integrated Security=True;";

            byte[] imageData = null;
            if (ProfilePicture.Image != null)
            {
                using (MemoryStream ms = new MemoryStream())
                {
                    ProfilePicture.Image.Save(ms, ProfilePicture.Image.RawFormat);
                    imageData = ms.ToArray();
                }
            }

            using (SqlConnection conn = new SqlConnection(connString))
            {
                try
                {
                    conn.Open();

                    string query = @"
                INSERT INTO Users (ID, name, password, role, image)
                VALUES (@ID, @Name, @Password, @Role, @Image)";

                    using (SqlCommand cmd = new SqlCommand(query, conn))
                    {
                        cmd.Parameters.AddWithValue("@ID", input_UserID.Text);
                        cmd.Parameters.AddWithValue("@Name", input_Username.Text);
                        cmd.Parameters.AddWithValue("@Password", input_Password.Text);
                        cmd.Parameters.AddWithValue("@Role", input_Role.Text);
                        cmd.Parameters.AddWithValue("@Image", (object)imageData ?? DBNull.Value);

                        int result = cmd.ExecuteNonQuery();
                        if (result > 0)
                        {
                            MessageBox.Show("User berhasil ditambahkan!");
                            LoadUserData();
                            ClearInput();
                        }
                        else
                        {
                            MessageBox.Show("Gagal menambahkan user.");
                        }
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show("Error: " + ex.Message);
                }
            }
        }

        private void btn_Edit_Click(object sender, EventArgs e)
        {
            string connString = @"Data Source=DESKTOP-BG9BHI8\SQLEXPRESS;Initial Catalog=WorkHive;Integrated Security=True;";

            byte[] imageData = null;
            if (ProfilePicture.Image != null)
            {
                using (MemoryStream ms = new MemoryStream())
                {
                    ProfilePicture.Image.Save(ms, ProfilePicture.Image.RawFormat);
                    imageData = ms.ToArray();
                }
            }

            using (SqlConnection conn = new SqlConnection(connString))
            {
                try
                {
                    conn.Open();

                    string query = @"
                UPDATE Users
                SET name = @Name,
                    password = @Password,
                    role = @Role,
                    image = @Image
                WHERE ID = @ID";

                    using (SqlCommand cmd = new SqlCommand(query, conn))
                    {
                        cmd.Parameters.AddWithValue("@ID", input_UserID.Text);
                        cmd.Parameters.AddWithValue("@Name", input_Username.Text);
                        cmd.Parameters.AddWithValue("@Password", input_Password.Text);
                        cmd.Parameters.AddWithValue("@Role", input_Role.Text);
                        cmd.Parameters.AddWithValue("@Image", (object)imageData ?? DBNull.Value);

                        int result = cmd.ExecuteNonQuery();
                        if (result > 0)
                        {
                            MessageBox.Show("User berhasil diperbarui!");
                            LoadUserData();
                            ClearInput();
                        }
                        else
                        {
                            MessageBox.Show("Gagal memperbarui user.");
                        }
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show("Error: " + ex.Message);
                }
            }
        }

        private void button1_Click(object sender, EventArgs e)
        {
            ClearInput();
        }

        private void btn_Delete_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrWhiteSpace(input_UserID.Text))
            {
                MessageBox.Show("Silakan pilih user yang ingin dihapus terlebih dahulu.");
                return;
            }

            DialogResult result = MessageBox.Show(
                "Apakah kamu yakin ingin menghapus user ini?",
                "Konfirmasi Hapus",
                MessageBoxButtons.YesNo,
                MessageBoxIcon.Warning
            );

            if (result == DialogResult.Yes)
            {
                string connString = @"Data Source=DESKTOP-BG9BHI8\SQLEXPRESS;Initial Catalog=WorkHive;Integrated Security=True;";

                using (SqlConnection conn = new SqlConnection(connString))
                {
                    try
                    {
                        conn.Open();

                        string query = "DELETE FROM Users WHERE ID = @ID";

                        using (SqlCommand cmd = new SqlCommand(query, conn))
                        {
                            cmd.Parameters.AddWithValue("@ID", input_UserID.Text);

                            int rowsAffected = cmd.ExecuteNonQuery();
                            if (rowsAffected > 0)
                            {
                                MessageBox.Show("User berhasil dihapus.");
                                LoadUserData();
                                ClearInput();
                            }
                            else
                            {
                                MessageBox.Show("Gagal menghapus user.");
                            }
                        }
                    }
                    catch (Exception ex)
                    {
                        MessageBox.Show("Error: " + ex.Message);
                    }
                }
            }
        }

        private void input_UserID_TextChanged(object sender, EventArgs e)
        {
            if (input_UserID.Text == "")
            {
                Enable(false);
            }
            else {
                Enable(true);
            }
        }
    }
}

