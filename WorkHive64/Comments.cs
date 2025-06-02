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

namespace WorkHive64
{
    public partial class Comments : Form
    {
        public Comments()
        {
            InitializeComponent();
            Load_Comment();
            button1.Enabled = false;
        }

        private void label3_Click(object sender, EventArgs e)
        {

        }

        private void Comments_Load(object sender, EventArgs e)
        {
            
        }
        private void Load_Comment()
        {
            string connectionString = @"Data Source=DESKTOP-BG9BHI8\SQLEXPRESS;Initial Catalog=WorkHive;Integrated Security=True;";

            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                try
                {
                    conn.Open();

                    string query = @"
                SELECT 
                    c.Comment_Id,
                    u.Name AS User_Name,
                    p.Project_Name AS Project_Name,
                    c.Comment,
                    c.Tanggal
                FROM Comment_Table c
                JOIN Users u ON c.ID_User = u.ID
                JOIN Project p ON c.Project_id = p.ID_Project
                WHERE c.Project_id = @ProjectID
                ORDER BY c.Tanggal DESC";

                    SqlCommand cmd = new SqlCommand(query, conn);
                    cmd.Parameters.AddWithValue("@ProjectID", Admin_Project.id_project_Global);

                    SqlDataAdapter da = new SqlDataAdapter(cmd);
                    DataTable dt = new DataTable();
                    da.Fill(dt);

                    dataGrid_Comment.DataSource = dt;

                    // Sembunyikan kolom jika perlu
                    if (dataGrid_Comment.Columns.Contains("Comment_Id"))
                        dataGrid_Comment.Columns["Comment_Id"].Visible = false;
                }
                catch (Exception ex)
                {
                    MessageBox.Show("Gagal memuat komentar: " + ex.Message);
                }
            }
        }

        private void dataGrid_Comment_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            if (e.RowIndex >= 0)
            {
                DataGridViewRow row = dataGrid_Comment.Rows[e.RowIndex];

                // Ambil nilai dari kolom dan tampilkan di label/textbox
                string projectName = row.Cells["Project_Name"].Value.ToString();
                string userName = row.Cells["User_Name"].Value.ToString();
                string commentText = row.Cells["Comment"].Value.ToString();

                label5.Text = projectName;
                label6.Text = userName;
                Receive.Text = commentText; // Pastikan Receive adalah TextBox atau RichTextBox
            }
        }



        private void btn_Back_Click(object sender, EventArgs e)
        {
            Admin_Project.id_project_Global = "";
            if (Admin_Project.Admin == true)
            {
                Admin_Project.Admin = false;
                Admin_Project a = new Admin_Project();
                a.Show();
                this.Hide();
            }
            else if (Employee_Project.Employee == true) 
            { 
                Employee_Project.Employee = false;
                Employee_Project v = new Employee_Project();
                v.Show();
                this.Hide();
                
            }
        }



        private void button1_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrWhiteSpace(textBox1.Text))
            {
                MessageBox.Show("Komentar tidak boleh kosong.");
                return;
            }

            string connectionString = @"Data Source=DESKTOP-BG9BHI8\SQLEXPRESS;Initial Catalog=WorkHive;Integrated Security=True;";

            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                try
                {
                    conn.Open();

                    string insertQuery = @"
                INSERT INTO Comment_Table (ID_User, Project_id, Tanggal, Comment)
                VALUES (@ID_User, @Project_id, @Tanggal, @Comment)";

                    SqlCommand cmd = new SqlCommand(insertQuery, conn);
                    cmd.Parameters.AddWithValue("@ID_User", Login.ID_Gobal);
                    cmd.Parameters.AddWithValue("@Project_id", Admin_Project.id_project_Global);
                    cmd.Parameters.AddWithValue("@Tanggal", DateTime.Now);
                    cmd.Parameters.AddWithValue("@Comment", textBox1.Text);

                    int rows = cmd.ExecuteNonQuery();

                    if (rows > 0)
                    {
                        MessageBox.Show("Komentar berhasil ditambahkan.");
                        Load_Comment(); // Refresh datagrid setelah insert
                        textBox1.Text = ""; // Kosongkan kolom komentar
                    }
                    else
                    {
                        MessageBox.Show("Gagal menambahkan komentar.");
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show("Terjadi kesalahan: " + ex.Message);
                }
            }
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {
            if (textBox1.Text == "")
            {
                button1.Enabled = false;
            }
            else {
                button1.Enabled = true;
            }

        }

        private void btn_Exit_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }
    }
}
