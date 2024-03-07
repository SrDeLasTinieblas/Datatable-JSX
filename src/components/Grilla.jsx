import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-buttons-bs5/css/buttons.bootstrap5.min.css";

import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import "datatables.net-buttons/js/buttons.colVis.js";

import "datatables.net";
import "datatables.net-bs5";
import "datatables.net-buttons-bs5";

const Grilla = ({ columns, data, size, mostrarEditar, mostrarEliminar }) => {
  const tableRef = useRef(null);
  const dataTableRef = useRef(null);

  useEffect(() => {
    if (!dataTableRef.current) {
      const columnsConfig = columns.map(column => ({ data: column }));

      if (mostrarEditar) {
        columnsConfig.push({
          data: null,
          render: function (data, type, row) {
            return `<button class="btn btn-primary edit-button no-export" data-id="${row.id}">Editar</button>`;
          },
          className: 'no-export'
        });
      }

      if (mostrarEliminar) {
        columnsConfig.push({
          data: null,
          render: function (data, type, row) {
            return `<button class="btn btn-danger delete-button no-export" data-id="${row.id}">Eliminar</button>`;
          },
          className: 'no-export'
        });
      }

      if (tableRef.current) {
        const dataTable = $(tableRef.current).DataTable({
          dom: 'Bfrtip',
          buttons: [
            'copy',
            {
              extend: 'excel',
              text: 'Exportar a Excel',
              exportOptions: {
                columns: ':not(.no-export)'
              },
              filename: 'archivo_excel',
              title: 'Mi Titulo EXCEL'
            },
            {
              extend: 'pdf',
              text: 'Exportar a PDF',
              exportOptions: {
                columns: ':not(.no-export)'
              },
              filename: 'archivo_pdf',
              title: 'Mi Titulo PDF'
              
            },
            'colvis'
          ],
          responsive: true,
          data: data,
          columns: columnsConfig
        });

        dataTableRef.current = dataTable;
      }
    } else {
      dataTableRef.current.clear();
      dataTableRef.current.rows.add(data);
      dataTableRef.current.draw();
    }

    return () => {
      if (dataTableRef.current) {
        dataTableRef.current.destroy();
        dataTableRef.current = null;
      }
    };
  }, [columns, data, mostrarEditar, mostrarEliminar]);

  useEffect(() => {
    const handleEdit = (e) => {
      const id = $(e.target).data('id');
      alert(id + " Modificar");
    };

    const handleDelete = (e) => {
      const id = $(e.target).data('id');
      alert(id + " eliminar");
    };

    $('.edit-button').on('click', handleEdit);
    $('.delete-button').on('click', handleDelete);

    return () => {
      $('.edit-button').off('click', handleEdit);
      $('.delete-button').off('click', handleDelete);
    };
  }, []);

  return (
    <div className="w-full" style={{ width: size }}>
      <table ref={tableRef} className="table table-striped">
        <thead>
          <tr>
            {columns.map((column, id) => (
              <th key={id}>{column}</th>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Grilla;
