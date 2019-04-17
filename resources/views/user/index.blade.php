@extends('adminlte::page')
@section('css')
<link rel="stylesheet" href="https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap4.min.css">
<link rel="stylesheet" href="{{ asset('assets/font-awesome/css/font-awesome.min.css') }}">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">
<link rel="stylesheet" href="{{ asset('assets/sweetalert2/sweetalert2.min.css') }}">
@endsection
@section('js')
<script src="{{ asset('assets/sweetalert2/sweetalert2.all.min.js') }}"></script>
@endsection
@include('layouts._modal')
@section('content')
<meta name="csrf-token" content="{{ csrf_token() }}">
<div class="panel panel-primary">
          <div class="panel-heading">
               <h3 class="panel-title">Data Users</h3>
               <a href="{{ route('user.create') }}" id="btn-create" class="btn btn-success pull-right modal-show" style="margin-top: -23px;">
                    <i class="icon-plus">
                         Create
                    </i>
               </a>
          </div>
          <div class="panel-body">
               <div class="table-responsive">
                    <table id="table-user" class="table table-striped table-bordered text-center" style="width:100%;">
                         <thead>
                              <tr>
                                   <th>No</th>
                                   <th>Nama</th>
                                   <th>E-mail</th>
                                   <th>Action</th>
                              </tr>
                         </thead>
                         <tbody>
                                        
                         </tbody>
                    </table>
               </div>
          </div>
     </div>

     <script
       src="https://code.jquery.com/jquery-3.4.0.js"
       integrity="sha256-DYZMCC8HTC+QDr5QNaIcfR7VSPtcISykd+6eSmBW5qo="
       crossorigin="anonymous">
     </script>
     <script src="{{ asset('js/script.js') }}"></script>
     <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js
     "></script>
     <script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
     <script>
          $(document).ready(function(){
               $('#table-user').DataTable({
                    responsive: true,
                    processing:true,
                    serverSide:true,
                    ajax: "{{ route('user.data') }}",
                    columns : [
                         {data: "DT_RowIndex", orderable: false, searchable: false},
                         {data: "name"},
                         {data: "email"},
                         {data: "action", orderable:false, searchable:false},
                    ]
               });  
          });
     </script>
@endsection
