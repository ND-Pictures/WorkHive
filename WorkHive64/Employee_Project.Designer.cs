namespace WorkHive64
{
    partial class Employee_Project
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.panel1 = new System.Windows.Forms.Panel();
            this.btn_Exit = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.btn_Home = new System.Windows.Forms.Button();
            this.btn_Back = new System.Windows.Forms.Button();
            this.panel2 = new System.Windows.Forms.Panel();
            this.btn_ManageProject = new System.Windows.Forms.Button();
            this.btn_Comment = new System.Windows.Forms.Button();
            this.dataGrid_Project = new System.Windows.Forms.DataGridView();
            this.label4 = new System.Windows.Forms.Label();
            this.label_JudulProject = new System.Windows.Forms.Label();
            this.label_DeskripsiProject = new System.Windows.Forms.Label();
            this.panel_ProjectInfo = new System.Windows.Forms.Panel();
            this.input_ProjectComment = new System.Windows.Forms.TextBox();
            this.label5 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.panel1.SuspendLayout();
            this.panel2.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.dataGrid_Project)).BeginInit();
            this.panel_ProjectInfo.SuspendLayout();
            this.SuspendLayout();
            // 
            // panel1
            // 
            this.panel1.BackColor = System.Drawing.Color.White;
            this.panel1.Controls.Add(this.btn_Exit);
            this.panel1.Controls.Add(this.label1);
            this.panel1.Location = new System.Drawing.Point(0, 0);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(790, 49);
            this.panel1.TabIndex = 24;
            // 
            // btn_Exit
            // 
            this.btn_Exit.BackColor = System.Drawing.Color.LightCoral;
            this.btn_Exit.Cursor = System.Windows.Forms.Cursors.Hand;
            this.btn_Exit.FlatStyle = System.Windows.Forms.FlatStyle.System;
            this.btn_Exit.Font = new System.Drawing.Font("Arial Rounded MT Bold", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btn_Exit.Location = new System.Drawing.Point(602, 4);
            this.btn_Exit.Name = "btn_Exit";
            this.btn_Exit.Size = new System.Drawing.Size(37, 42);
            this.btn_Exit.TabIndex = 8;
            this.btn_Exit.Text = "X";
            this.btn_Exit.UseVisualStyleBackColor = false;
            this.btn_Exit.Click += new System.EventHandler(this.btn_Exit_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 27.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.ForeColor = System.Drawing.SystemColors.ControlText;
            this.label1.Location = new System.Drawing.Point(2, 2);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(396, 42);
            this.label1.TabIndex = 1;
            this.label1.Text = "Employee Dashboard";
            // 
            // btn_Home
            // 
            this.btn_Home.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(186)))), ((int)(((byte)(218)))), ((int)(((byte)(248)))));
            this.btn_Home.Cursor = System.Windows.Forms.Cursors.Hand;
            this.btn_Home.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.btn_Home.Font = new System.Drawing.Font("Arial Rounded MT Bold", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btn_Home.ForeColor = System.Drawing.Color.Black;
            this.btn_Home.Location = new System.Drawing.Point(376, 3);
            this.btn_Home.Name = "btn_Home";
            this.btn_Home.Size = new System.Drawing.Size(81, 33);
            this.btn_Home.TabIndex = 13;
            this.btn_Home.Text = "Home";
            this.btn_Home.UseVisualStyleBackColor = false;
            this.btn_Home.Click += new System.EventHandler(this.btn_Home_Click);
            // 
            // btn_Back
            // 
            this.btn_Back.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(192)))), ((int)(((byte)(192)))));
            this.btn_Back.Cursor = System.Windows.Forms.Cursors.Hand;
            this.btn_Back.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.btn_Back.Font = new System.Drawing.Font("Arial Rounded MT Bold", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btn_Back.Location = new System.Drawing.Point(3, 3);
            this.btn_Back.Name = "btn_Back";
            this.btn_Back.Size = new System.Drawing.Size(73, 33);
            this.btn_Back.TabIndex = 10;
            this.btn_Back.Text = "Back";
            this.btn_Back.UseVisualStyleBackColor = false;
            this.btn_Back.Click += new System.EventHandler(this.btn_Back_Click);
            // 
            // panel2
            // 
            this.panel2.BackColor = System.Drawing.Color.WhiteSmoke;
            this.panel2.Controls.Add(this.btn_Home);
            this.panel2.Controls.Add(this.btn_ManageProject);
            this.panel2.Controls.Add(this.btn_Back);
            this.panel2.Location = new System.Drawing.Point(0, 48);
            this.panel2.Name = "panel2";
            this.panel2.Size = new System.Drawing.Size(790, 40);
            this.panel2.TabIndex = 25;
            // 
            // btn_ManageProject
            // 
            this.btn_ManageProject.BackColor = System.Drawing.SystemColors.ActiveBorder;
            this.btn_ManageProject.Cursor = System.Windows.Forms.Cursors.Hand;
            this.btn_ManageProject.Enabled = false;
            this.btn_ManageProject.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.btn_ManageProject.Font = new System.Drawing.Font("Arial Rounded MT Bold", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btn_ManageProject.ForeColor = System.Drawing.Color.Black;
            this.btn_ManageProject.Location = new System.Drawing.Point(463, 4);
            this.btn_ManageProject.Name = "btn_ManageProject";
            this.btn_ManageProject.Size = new System.Drawing.Size(176, 33);
            this.btn_ManageProject.TabIndex = 12;
            this.btn_ManageProject.Text = "Manage Project";
            this.btn_ManageProject.UseVisualStyleBackColor = false;
            // 
            // btn_Comment
            // 
            this.btn_Comment.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(192)))), ((int)(((byte)(255)))), ((int)(((byte)(192)))));
            this.btn_Comment.Cursor = System.Windows.Forms.Cursors.Hand;
            this.btn_Comment.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.btn_Comment.Font = new System.Drawing.Font("Arial Rounded MT Bold", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btn_Comment.Location = new System.Drawing.Point(524, 553);
            this.btn_Comment.Name = "btn_Comment";
            this.btn_Comment.Size = new System.Drawing.Size(129, 33);
            this.btn_Comment.TabIndex = 28;
            this.btn_Comment.Text = "Comment";
            this.btn_Comment.UseVisualStyleBackColor = false;
            this.btn_Comment.Click += new System.EventHandler(this.btn_Comment_Click);
            // 
            // dataGrid_Project
            // 
            this.dataGrid_Project.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGrid_Project.Location = new System.Drawing.Point(3, 92);
            this.dataGrid_Project.Name = "dataGrid_Project";
            this.dataGrid_Project.Size = new System.Drawing.Size(637, 244);
            this.dataGrid_Project.TabIndex = 26;
            this.dataGrid_Project.CellContentClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.dataGrid_Project_CellContentClick);
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(591, 537);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(62, 13);
            this.label4.TabIndex = 29;
            this.label4.Text = "v0.5.5 Beta";
            this.label4.Click += new System.EventHandler(this.label4_Click);
            // 
            // label_JudulProject
            // 
            this.label_JudulProject.AutoSize = true;
            this.label_JudulProject.Font = new System.Drawing.Font("Arial Rounded MT Bold", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label_JudulProject.ForeColor = System.Drawing.SystemColors.ControlText;
            this.label_JudulProject.Location = new System.Drawing.Point(9, 6);
            this.label_JudulProject.Name = "label_JudulProject";
            this.label_JudulProject.Size = new System.Drawing.Size(111, 24);
            this.label_JudulProject.TabIndex = 35;
            this.label_JudulProject.Text = "Project ID";
            this.label_JudulProject.Click += new System.EventHandler(this.label2_Click);
            // 
            // label_DeskripsiProject
            // 
            this.label_DeskripsiProject.AutoSize = true;
            this.label_DeskripsiProject.Font = new System.Drawing.Font("Arial Rounded MT Bold", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label_DeskripsiProject.ForeColor = System.Drawing.SystemColors.ControlText;
            this.label_DeskripsiProject.Location = new System.Drawing.Point(9, 30);
            this.label_DeskripsiProject.Name = "label_DeskripsiProject";
            this.label_DeskripsiProject.Size = new System.Drawing.Size(0, 18);
            this.label_DeskripsiProject.TabIndex = 36;
            // 
            // panel_ProjectInfo
            // 
            this.panel_ProjectInfo.BackColor = System.Drawing.Color.OldLace;
            this.panel_ProjectInfo.Controls.Add(this.label3);
            this.panel_ProjectInfo.Controls.Add(this.label2);
            this.panel_ProjectInfo.Controls.Add(this.label_JudulProject);
            this.panel_ProjectInfo.Controls.Add(this.label_DeskripsiProject);
            this.panel_ProjectInfo.Location = new System.Drawing.Point(3, 343);
            this.panel_ProjectInfo.Name = "panel_ProjectInfo";
            this.panel_ProjectInfo.Size = new System.Drawing.Size(637, 67);
            this.panel_ProjectInfo.TabIndex = 37;
            this.panel_ProjectInfo.Paint += new System.Windows.Forms.PaintEventHandler(this.panel_ProjectInfo_Paint);
            // 
            // input_ProjectComment
            // 
            this.input_ProjectComment.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(227)))), ((int)(((byte)(222)))), ((int)(((byte)(200)))));
            this.input_ProjectComment.Font = new System.Drawing.Font("Arial Rounded MT Bold", 11.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.input_ProjectComment.Location = new System.Drawing.Point(9, 450);
            this.input_ProjectComment.Multiline = true;
            this.input_ProjectComment.Name = "input_ProjectComment";
            this.input_ProjectComment.Size = new System.Drawing.Size(509, 136);
            this.input_ProjectComment.TabIndex = 39;
            this.input_ProjectComment.TextChanged += new System.EventHandler(this.input_ProjectComment_TextChanged);
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Font = new System.Drawing.Font("Arial Rounded MT Bold", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label5.ForeColor = System.Drawing.SystemColors.ControlText;
            this.label5.Location = new System.Drawing.Point(5, 423);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(136, 24);
            this.label5.TabIndex = 38;
            this.label5.Text = "Project Task";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Arial Rounded MT Bold", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.ForeColor = System.Drawing.SystemColors.ControlText;
            this.label2.Location = new System.Drawing.Point(329, 30);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(0, 18);
            this.label2.TabIndex = 37;
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("Arial Rounded MT Bold", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label3.ForeColor = System.Drawing.SystemColors.ControlText;
            this.label3.Location = new System.Drawing.Point(328, 6);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(147, 24);
            this.label3.TabIndex = 38;
            this.label3.Text = "Project Name";
            // 
            // Employee_Project
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FloralWhite;
            this.ClientSize = new System.Drawing.Size(651, 591);
            this.Controls.Add(this.input_ProjectComment);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.panel_ProjectInfo);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.panel1);
            this.Controls.Add(this.panel2);
            this.Controls.Add(this.btn_Comment);
            this.Controls.Add(this.dataGrid_Project);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "Employee_Project";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Employee_Project";
            this.panel1.ResumeLayout(false);
            this.panel1.PerformLayout();
            this.panel2.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.dataGrid_Project)).EndInit();
            this.panel_ProjectInfo.ResumeLayout(false);
            this.panel_ProjectInfo.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.Button btn_Exit;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button btn_Home;
        private System.Windows.Forms.Button btn_Back;
        private System.Windows.Forms.Panel panel2;
        private System.Windows.Forms.Button btn_ManageProject;
        private System.Windows.Forms.Button btn_Comment;
        private System.Windows.Forms.DataGridView dataGrid_Project;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label_JudulProject;
        private System.Windows.Forms.Label label_DeskripsiProject;
        private System.Windows.Forms.Panel panel_ProjectInfo;
        private System.Windows.Forms.TextBox input_ProjectComment;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label2;
    }
}