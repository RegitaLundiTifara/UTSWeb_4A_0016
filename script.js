// Pengisian Contact Form
$("#contactForm").submit(function(e){

    e.preventDefault();

    alert("Message sent successfully!");

});

// Order Button
 const customerName = $("#customerName");
    const breadType = $("#breadType");
    const breadTotal = $("#breadTotal");

    const btnTambah = $("#btnTambah");
    const daftarOrder = $("#daftarOrder");

    let dataEdit = null;

    btnTambah.click(function () {

        const nama = customerName.val();
        const roti = breadType.val();
        const jumlah = breadTotal.val();

        if (nama === "" || jumlah === "") {

            alert("Data harus diisi!");
            return;
         }

        // UPDATE DATA
        if (dataEdit) {

            dataEdit.find(".nama").html(nama);
            dataEdit.find(".roti").html("Bread: " + roti);
            dataEdit.find(".jumlah").html("Total: " + jumlah);

            dataEdit = null;

            btnTambah.html("Add Order");

        }

         // TAMBAH DATA
        else {

            const listBaru = $(`
                
                <li class="list-group-item d-flex justify-content-between align-items-center mb-3">

                    <div>

                        <h5 class="nama">${nama}</h5>

                        <p class="roti">Bread: ${roti}</p>

                        <p class="jumlah">Total: ${jumlah}</p>

                    </div>

                    <div>

                        <button class="edit btn btn-success btn-sm">
                            Edit
                        </button>

                        <button class="hapus btn btn-danger btn-sm">
                            Delete
                        </button>

                    </div>

                </li>

            `);

            daftarOrder.append(listBaru);

            // DELETE
            listBaru.find(".hapus").click(function () {

                listBaru.remove();

            });

            // EDIT
            listBaru.find(".edit").click(function () {

                customerName.val(
                    listBaru.find(".nama").html()
                );

                breadType.val(
                    listBaru.find(".roti").html().replace("Bread: ", "")
                );

                breadTotal.val(
                    listBaru.find(".jumlah").html().replace("Total: ", "")
                );

                dataEdit = listBaru;

                btnTambah.html("Update Order");

            });

        }

        // RESET INPUT
        customerName.val("");
        breadTotal.val("");

    });
