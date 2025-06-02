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
    public partial class Admin_Project : Form
    {

        public Admin_Project()
        {
            InitializeComponent();
            LoadProjectData();
            LoadComboBoxUser();
            Ena(false);
            btn_Insert.Enabled = false;
            
        }
        public void Ena(bool a) {
            btn_Approve.Enabled = a;
            btn_Delete.Enabled = a;
            btn_Edit.Enabled = a;
            button2.Enabled = a;
        }

        public static string id_project_Global = "";
        public static bool Admin = false;

        private void btn_ManageEmployee_Click(object sender, EventArgs e)
        {
            Admin_User n  = new Admin_User();
            n.Show();
            this.Hide();
        }
        private void LoadComboBoxUser()
        {
            string connString = @"Data Source=DESKTOP-BG9BHI8\SQLEXPRESS;Initial Catalog=WorkHive;Integrated Security=True;";

            using (SqlConnection conn = new SqlConnection(connString))
            {
                try
                {
                    DataTable dt = new DataTable();
                    SqlDataAdapter da = new SqlDataAdapter("SELECT ID, Name FROM Users WHERE Role <> 'Manager'", conn);
                    da.Fill(dt);

                    comboBox1.DisplayMember = "Name";
                    comboBox1.ValueMember = "ID";
                    comboBox1.DataSource = dt;

                }
                catch (Exception ex)
                {
                    MessageBox.Show("Gagal memuat user: " + ex.Message);
                }
            }
        }


        private void input_ProjectHandler_TextChanged(object sender, EventArgs e)
        {
            
        }

        private void dataGrid_Project_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            if (e.RowIndex >= 0) // Pastikan klik bukan pada header
            {
                DataGridViewRow row = dataGrid_Project.Rows[e.RowIndex];

                // Ambil dan tampilkan nilai ke TextBox
                input_ProjectName.Text = row.Cells["Project_Name"].Value.ToString();
                comboBox1.Text = row.Cells["Assigned_To"].Value.ToString();
                input_ProjectTask.Text = row.Cells["Descritption"].Value.ToString();

                // Simpan Project_id ke variabel global
                label7.Text = row.Cells["ID_Project"].Value.ToString();
                id_project_Global = label7.Text;
                Ena(true);
            }
        }
        private void LoadProjectData()
        {
            string connString = @"Data Source=DESKTOP-BG9BHI8\SQLEXPRESS;Initial Catalog=WorkHive;Integrated Security=True;";

            using (SqlConnection conn = new SqlConnection(connString))
            {
                try
                {
                    conn.Open();
                    string query = @"
                SELECT 
                    P.Id_Project,
                    P.Project_name,
                    P.Descritption,
                    P.Start_date,
                    P.End_date,
                    P.Status,
                    U.name AS Assigned_To
                FROM Project P
                INNER JOIN Users U ON P.Assigned_to = U.ID";

                    SqlDataAdapter adapter = new SqlDataAdapter(query, conn);
                    DataTable dt = new DataTable();
                    adapter.Fill(dt);

                    dataGrid_Project.DataSource = dt;
                    dataGrid_Project.Columns["Id_Project"].Visible = false;

                }
                catch (Exception ex)
                {
                    MessageBox.Show("Gagal memuat data proyek: " + ex.Message);
                }
            }
        }

        private void btn_Home_Click(object sender, EventArgs e)
        {
            Admin a = new Admin();
            a.Show();
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

        private void button1_Click(object sender, EventArgs e)
        {
            ClearInputFields();
        }

        private void Admin_Project_Load(object sender, EventArgs e)
        {

        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void btn_ManageProject_Click(object sender, EventArgs e)
        {

        }

        private void panel2_Paint(object sender, PaintEventArgs e)
        {

        }

        private void dataGrid_Project_CellClick(object sender, DataGridViewCellEventArgs e)
        {

        }

        private void label6_Click(object sender, EventArgs e)
        {

        }

        private void button2_Click(object sender, EventArgs e)
        {
            Comments c =new Comments();
            c.Show();
            this.Hide();
            Admin = true;   
        }

        private void btn_Approve_Click(object sender, EventArgs e)
        {
            string connString = @"Data Source=DESKTOP-BG9BHI8\SQLEXPRESS;Initial Catalog=WorkHive;Integrated Security=True;";
            using (SqlConnection conn = new SqlConnection(connString))
            {
                try
                {
                    conn.Open();

                    string query = "UPDATE Project SET Status = 'Approved' WHERE ID_Project = '"+label7.Text+"'";

                    SqlCommand cmd = new SqlCommand(query, conn);
                  

                    int rowsAffected = cmd.ExecuteNonQuery();

                    if (rowsAffected > 0)
                    {
                        MessageBox.Show("Project berhasil di-approve.", "Sukses", MessageBoxButtons.OK, MessageBoxIcon.Information);
                    }
                    else
                    {
                        MessageBox.Show("Project tidak ditemukan atau gagal diubah.", "Gagal", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show("Terjadi kesalahan saat melakukan approve:\n" + ex.Message, "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                }
                LoadProjectData();
            }
        }


        private void btn_Insert_Click(object sender, EventArgs e)
        {
            string connString = @"Data Source=DESKTOP-BG9BHI8\SQLEXPRESS;Initial Catalog=WorkHive;Integrated Security=True;";

            try
            {
                using (SqlConnection conn = new SqlConnection(connString))
                {
                    conn.Open();

                    // Ambil ID dari comboBox1 (pastikan sudah pakai DataSource)
                    string assignedToID = comboBox1.SelectedValue.ToString();

                    string query = @"
                INSERT INTO Project (Project_Name, Descritption, Assigned_To,  Status)
                VALUES (@ProjectName, @Description, @AssignedTo,  'Pending')";

                    SqlCommand cmd = new SqlCommand(query, conn);
                    cmd.Parameters.AddWithValue("@ProjectName", input_ProjectName.Text.Trim());
                    cmd.Parameters.AddWithValue("@Description", input_ProjectTask.Text.Trim());
                    cmd.Parameters.AddWithValue("@AssignedTo", assignedToID);

                    int rowsInserted = cmd.ExecuteNonQuery();

                    if (rowsInserted > 0)
                    {
                        MessageBox.Show("Project berhasil ditambahkan.", "Sukses", MessageBoxButtons.OK, MessageBoxIcon.Information);

                        // Refresh DataGrid setelah insert
                        LoadProjectData();

                        // Kosongkan input setelah insert
                        input_ProjectName.Clear();
                        input_ProjectTask.Clear();
                        comboBox1.SelectedIndex = -1;
                    }
                    else
                    {
                        MessageBox.Show("Gagal menambahkan project.", "Gagal", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Terjadi kesalahan: " + ex.Message, "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private void btn_Edit_Click(object sender, EventArgs e)
        {
            string connString = @"Data Source=DESKTOP-BG9BHI8\SQLEXPRESS;Initial Catalog=WorkHive;Integrated Security=True;";

            try
            {
                using (SqlConnection conn = new SqlConnection(connString))
                {
                    conn.Open();

                    // Pastikan ID project tidak kosong
                    if (string.IsNullOrWhiteSpace(label7.Text))
                    {
                        MessageBox.Show("Pilih project yang ingin diedit terlebih dahulu.");
                        return;
                    }

                    string projectId = label7.Text;
                    string assignedToID = comboBox1.SelectedValue.ToString();

                    string query = @"
                UPDATE Project 
                SET Project_Name = @ProjectName,
                    Descritption = @Description,
                    Assigned_To = @AssignedTo
                WHERE ID_Project = @ProjectId";

                    SqlCommand cmd = new SqlCommand(query, conn);
                    cmd.Parameters.AddWithValue("@ProjectName", input_ProjectName.Text.Trim());
                    cmd.Parameters.AddWithValue("@Description", input_ProjectTask.Text.Trim());
                    cmd.Parameters.AddWithValue("@AssignedTo", assignedToID);
                    cmd.Parameters.AddWithValue("@ProjectId", projectId);

                    int rowsAffected = cmd.ExecuteNonQuery();

                    if (rowsAffected > 0)
                    {
                        MessageBox.Show("Project berhasil diperbarui.", "Sukses", MessageBoxButtons.OK, MessageBoxIcon.Information);
                        LoadProjectData();
                        ClearInputFields();
                    }
                    else
                    {
                        MessageBox.Show("Gagal memperbarui project.", "Gagal", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Terjadi kesalahan saat update: " + ex.Message, "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private void ClearInputFields()
        {
            input_ProjectName.Clear();
            input_ProjectTask.Clear();
            comboBox1.SelectedIndex = -1;
            label7.Text = "";
            Ena(false);
        }

        private void btn_Delete_Click(object sender, EventArgs e)
        {
            string connString = @"Data Source=DESKTOP-BG9BHI8\SQLEXPRESS;Initial Catalog=WorkHive;Integrated Security=True;";

            try
            {
                if (string.IsNullOrWhiteSpace(label7.Text))
                {
                    MessageBox.Show("Pilih project yang ingin dihapus terlebih dahulu.");
                    return;
                }

                DialogResult confirm = MessageBox.Show("Apakah Anda yakin ingin menghapus project ini?", "Konfirmasi Hapus", MessageBoxButtons.YesNo, MessageBoxIcon.Warning);
                if (confirm != DialogResult.Yes) return;

                using (SqlConnection conn = new SqlConnection(connString))
                {
                    conn.Open();

                    string query = "DELETE FROM Project WHERE ID_Project = @ProjectId";
                    SqlCommand cmd = new SqlCommand(query, conn);
                    cmd.Parameters.AddWithValue("@ProjectId", label7.Text);

                    int rowsDeleted = cmd.ExecuteNonQuery();

                    if (rowsDeleted > 0)
                    {
                        MessageBox.Show("Project berhasil dihapus.", "Sukses", MessageBoxButtons.OK, MessageBoxIcon.Information);
                        LoadProjectData();
                        ClearInputFields();
                    }
                    else
                    {
                        MessageBox.Show("Gagal menghapus project.", "Gagal", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Terjadi kesalahan saat menghapus: " + ex.Message, "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private void label7_Click(object sender, EventArgs e)
        {

        }

        private void label7_TextChanged(object sender, EventArgs e)
        {
            

        }

        private void label7_DoubleClick(object sender, EventArgs e)
        {

        }

        private void input_ProjectName_TextChanged(object sender, EventArgs e)
        {
            if (input_ProjectName.Text == "" && label7.Text=="")
            {
                btn_Insert.Enabled = false;
            }
            else {
                btn_Insert.Enabled = true;
            }
        }
    }
}
