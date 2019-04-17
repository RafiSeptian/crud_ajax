<form action="{{ route('user.store') }}" method="post">
     <div class="form-group">
          <label for="name">Name</label>
          <input id="name" name="name" class="form-control" type="text">
     </div>

     <div class="form-group">
          <label for="email">E-mail</label>
          <input id="email" name="email" class="form-control" type="email">
     </div>

     <div class="form-group">
          <label for="password">Password</label>
          <input id="password" name="password" class="form-control" type="password">
     </div>
     
</form>