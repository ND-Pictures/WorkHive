using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WorkHive64
{
    public partial class Employee_Project : Form
    {
        public Employee_Project()
        {
            InitializeComponent();
            LoadProjectDataForEmployee(Login.ID_Gobal);
            btn_Comment.Enabled= false;
            
        }
        public static bool Employee = false;
        private void LoadProjectDataForEmployee(string employeeID)
        {
            string connString = @"Data Source=DESKTOP-BG9BHI8\SQLEXPRESS;Initial Catalog=WorkHive;Integrated Security=True;";

            using (SqlConnection conn = new SqlConnection(connString))
            {
                try
                {
                    conn.Open();
                    string query = @"
    SELECT 
        ID_Project AS 'ID Proyek',
        Project_Name AS 'Nama Proyek',
        Descritption AS 'Deskripsi',
        Start_Date AS 'Tanggal Mulai',
        End_Date AS 'Tanggal Selesai',
        Status
    FROM Project
    WHERE Assigned_To = @EmployeeID"; // Pastikan kolom AssignedTo ada di tabel Project


                    SqlDataAdapter adapter = new SqlDataAdapter(query, conn);
                    adapter.SelectCommand.Parameters.AddWithValue("@EmployeeID", employeeID);

                    DataTable dt = new DataTable();
                    adapter.Fill(dt);

                    dataGrid_Project.DataSource = dt;
                }
                catch (Exception ex)
                {
                    MessageBox.Show("Gagal memuat data proyek: " + ex.Message);
                }
            }
        }


        private void label2_Click(object sender, EventArgs e)
        {

        }

        private void label4_Click(object sender, EventArgs e)
        {

        }

        private void btn_Comment_Click(object sender, EventArgs e)
        {
            Employee = true;
            Admin_Project.id_project_Global = label_DeskripsiProject.Text;
            Comments c = new Comments();
            c.Show();
            this.Hide();

        }

        private void panel_ProjectInfo_Paint(object sender, PaintEventArgs e)
        {

        }

        private void btn_Back_Click(object sender, EventArgs e)
        {
            Employee_Home a = new Employee_Home();
            a.Show();
            this.Hide();
        }

        private void dataGrid_Project_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            if (e.RowIndex >= 0)
            {
                DataGridViewRow row = dataGrid_Project.Rows[e.RowIndex];

                // Ambil nilai dari kolom dan tampilkan ke label/textbox
                string idProject = row.Cells["ID Proyek"].Value.ToString();
                string projectName = row.Cells["Nama Proyek"].Value.ToString();
                string description = row.Cells["Deskripsi"].Value.ToString();

                label_DeskripsiProject.Text = idProject;
                label2.Text = projectName;
                input_ProjectComment.Text = description;
                btn_Comment.Enabled = true;
            }
        }


        private void input_ProjectComment_TextChanged(object sender, EventArgs e)
        {

        }

        private void btn_Exit_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void btn_Home_Click(object sender, EventArgs e)
        {
            Employee x = new Employee();
            x.Show();
            this.Hide();
        }
    }
}
