﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using TesteBitti.Repositories;

namespace TesteBitti.Repositories.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20200425045048_testebitti migration 8")]
    partial class testebittimigration8
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("TesteBitti.Domain.Cliente", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CpfCnpj");

                    b.Property<DateTime>("DataNascimento");

                    b.Property<string>("InscricaoEstadual");

                    b.Property<string>("Nome");

                    b.Property<string>("Profissao");

                    b.Property<string>("Sexo");

                    b.HasKey("Id");

                    b.ToTable("Cliente");
                });

            modelBuilder.Entity("TesteBitti.Domain.Endereco", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Bairro");

                    b.Property<string>("Cep");

                    b.Property<string>("Cidade");

                    b.Property<string>("Complemento");

                    b.Property<string>("Estado");

                    b.Property<string>("Logradouro");

                    b.Property<int>("Numero");

                    b.Property<int?>("clienteId");

                    b.HasKey("Id");

                    b.HasIndex("clienteId");

                    b.ToTable("Endereco");
                });

            modelBuilder.Entity("TesteBitti.Domain.Endereco", b =>
                {
                    b.HasOne("TesteBitti.Domain.Cliente", "cliente")
                        .WithMany("endereco")
                        .HasForeignKey("clienteId");
                });
#pragma warning restore 612, 618
        }
    }
}
