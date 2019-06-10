using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Pizzarias.WebApi.Domains
{
    public partial class PizzariasContext : DbContext
    {
        public PizzariasContext()
        {
        }

        public PizzariasContext(DbContextOptions<PizzariasContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Categoria> Categoria { get; set; }
        public virtual DbSet<Pizzaria> Pizzaria { get; set; }
        public virtual DbSet<TipoUsuario> TipoUsuario { get; set; }
        public virtual DbSet<Usuarios> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=.\\SQLEXPRESS; initial catalog = Pizzarias;user id = sa; pwd = 132");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Categoria>(entity =>
            {
                entity.Property(e => e.Categoria1)
                    .IsRequired()
                    .HasColumnName("Categoria")
                    .HasMaxLength(3)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Pizzaria>(entity =>
            {
                entity.HasKey(e => e.IdPizzaria);

                entity.HasIndex(e => e.Cnpj)
                    .HasName("UQ__Pizzaria__AA57D6B4908D55EF")
                    .IsUnique();

                entity.Property(e => e.IdPizzaria).HasColumnName("Id_pizzaria");

                entity.Property(e => e.Categoria)
                    .HasMaxLength(3)
                    .IsUnicode(false);

                entity.Property(e => e.Cnpj)
                    .IsRequired()
                    .HasColumnName("CNPJ")
                    .HasMaxLength(14)
                    .IsUnicode(false);

                entity.Property(e => e.HorarioFuncionamento)
                    .HasColumnName("Horario_Funcionamento")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.IdCategoria).HasColumnName("Id_Categoria");

                entity.Property(e => e.Localizacao)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Telefone)
                    .HasMaxLength(11)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdCategoriaNavigation)
                    .WithMany(p => p.Pizzaria)
                    .HasForeignKey(d => d.IdCategoria)
                    .HasConstraintName("FK__Pizzaria__Id_Cat__70DDC3D8");
            });

            modelBuilder.Entity<TipoUsuario>(entity =>
            {
                entity.ToTable("Tipo_Usuario");

                entity.HasIndex(e => e.Permissao)
                    .HasName("UQ__Tipo_Usu__82021A3B683ABFE5")
                    .IsUnique();

                entity.Property(e => e.Permissao)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Usuarios>(entity =>
            {
                entity.HasKey(e => e.IdUsuario);

                entity.HasIndex(e => e.Email)
                    .HasName("UQ__Usuarios__A9D105344B9B50A7")
                    .IsUnique();

                entity.Property(e => e.IdUsuario).HasColumnName("Id_usuario");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.IdTipoUsuario).HasColumnName("ID_Tipo_Usuario");

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdTipoUsuarioNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.IdTipoUsuario)
                    .HasConstraintName("FK__Usuarios__ID_Tip__5DCAEF64");
            });
        }
    }
}
