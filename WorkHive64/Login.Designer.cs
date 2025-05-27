namespace WorkHive64
{
    partial class Login
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Login));
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.input_ID = new System.Windows.Forms.TextBox();
            this.input_Password = new System.Windows.Forms.TextBox();
            this.label3 = new System.Windows.Forms.Label();
            this.btn_Signin = new System.Windows.Forms.Button();
            this.panel1 = new System.Windows.Forms.Panel();
            this.btn_Exit = new System.Windows.Forms.Button();
            this.label4 = new System.Windows.Forms.Label();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            this.panel1.SuspendLayout();
            this.SuspendLayout();
            // 
            // pictureBox1
            // 
            this.pictureBox1.BackColor = System.Drawing.Color.OldLace;
            this.pictureBox1.Image = ((System.Drawing.Image)(resources.GetObject("pictureBox1.Image")));
            this.pictureBox1.Location = new System.Drawing.Point(-1, 0);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(308, 341);
            this.pictureBox1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.pictureBox1.TabIndex = 0;
            this.pictureBox1.TabStop = false;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Roboto", 27.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.ForeColor = System.Drawing.SystemColors.ControlText;
            this.label1.Location = new System.Drawing.Point(2, 3);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(116, 44);
            this.label1.TabIndex = 1;
            this.label1.Text = "Login";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Arial Rounded MT Bold", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.ForeColor = System.Drawing.SystemColors.ControlText;
            this.label2.Location = new System.Drawing.Point(313, 77);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(33, 24);
            this.label2.TabIndex = 2;
            this.label2.Text = "ID";
            // 
            // input_ID
            // 
            this.input_ID.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(227)))), ((int)(((byte)(222)))), ((int)(((byte)(200)))));
            this.input_ID.Font = new System.Drawing.Font("Arial Rounded MT Bold", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.input_ID.Location = new System.Drawing.Point(317, 104);
            this.input_ID.Name = "input_ID";
            this.input_ID.Size = new System.Drawing.Size(292, 32);
            this.input_ID.TabIndex = 3;
            // 
            // input_Password
            // 
            this.input_Password.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(227)))), ((int)(((byte)(222)))), ((int)(((byte)(200)))));
            this.input_Password.Font = new System.Drawing.Font("Arial Rounded MT Bold", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.input_Password.Location = new System.Drawing.Point(317, 182);
            this.input_Password.Name = "input_Password";
            this.input_Password.Size = new System.Drawing.Size(292, 32);
            this.input_Password.TabIndex = 5;
            this.input_Password.UseSystemPasswordChar = true;
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("Arial Rounded MT Bold", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label3.ForeColor = System.Drawing.SystemColors.ControlText;
            this.label3.Location = new System.Drawing.Point(313, 155);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(110, 24);
            this.label3.TabIndex = 4;
            this.label3.Text = "Password";
            // 
            // btn_Signin
            // 
            this.btn_Signin.BackColor = System.Drawing.Color.LemonChiffon;
            this.btn_Signin.Cursor = System.Windows.Forms.Cursors.Hand;
            this.btn_Signin.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.btn_Signin.Font = new System.Drawing.Font("Roboto", 15.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btn_Signin.Location = new System.Drawing.Point(502, 294);
            this.btn_Signin.Name = "btn_Signin";
            this.btn_Signin.Size = new System.Drawing.Size(107, 33);
            this.btn_Signin.TabIndex = 6;
            this.btn_Signin.Text = "Sign in";
            this.btn_Signin.UseVisualStyleBackColor = false;
            this.btn_Signin.Click += new System.EventHandler(this.btn_Signin_Click);
            // 
            // panel1
            // 
            this.panel1.BackColor = System.Drawing.Color.White;
            this.panel1.Controls.Add(this.btn_Exit);
            this.panel1.Controls.Add(this.label1);
            this.panel1.Location = new System.Drawing.Point(307, 0);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(316, 49);
            this.panel1.TabIndex = 7;
            // 
            // btn_Exit
            // 
            this.btn_Exit.BackColor = System.Drawing.Color.LightCoral;
            this.btn_Exit.Cursor = System.Windows.Forms.Cursors.Hand;
            this.btn_Exit.DialogResult = System.Windows.Forms.DialogResult.Cancel;
            this.btn_Exit.FlatStyle = System.Windows.Forms.FlatStyle.System;
            this.btn_Exit.Font = new System.Drawing.Font("Arial Rounded MT Bold", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btn_Exit.Location = new System.Drawing.Point(276, 3);
            this.btn_Exit.Name = "btn_Exit";
            this.btn_Exit.Size = new System.Drawing.Size(37, 42);
            this.btn_Exit.TabIndex = 8;
            this.btn_Exit.Text = "X";
            this.btn_Exit.UseVisualStyleBackColor = false;
            this.btn_Exit.Click += new System.EventHandler(this.btn_Exit_Click);
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(314, 318);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(62, 13);
            this.label4.TabIndex = 8;
            this.label4.Text = "v0.5.5 Beta";
            // 
            // Login
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FloralWhite;
            this.CancelButton = this.btn_Exit;
            this.ClientSize = new System.Drawing.Size(621, 340);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.panel1);
            this.Controls.Add(this.btn_Signin);
            this.Controls.Add(this.input_Password);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.input_ID);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.pictureBox1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "Login";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Login";
            this.WindowState = System.Windows.Forms.FormWindowState.Minimized;
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            this.panel1.ResumeLayout(false);
            this.panel1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox input_ID;
        private System.Windows.Forms.TextBox input_Password;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Button btn_Signin;
        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.Button btn_Exit;
        private System.Windows.Forms.Label label4;
    }
}

