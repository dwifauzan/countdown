 function home(){
        $search = request()->search;
        if(strlen($search)){
            $result = User::where('name', 'like', "%$search%")->get();
    
        }else{
            $result = User::get();
        }
        return view("home", compact("result"));
    }



   <div class="table-responsive">
            <table class="table table-bordered align-middle">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Status level</th>
                        @if (auth()->user()->role_id == 1)
                            <th>Aksi</th>
                        @endif
                    </tr>
                </thead>
                <tbody>
                    @foreach ($result as $item)
                        <tr>
                            <td>{{ $loop->iteration }}</td>
                            <td>{{ $item->name }}</td>
                            <td>{{ $item->email }}</td>
                            <td>{{ $item->role->role_name }}</td>
                            @if (auth()->user()->role_id == 1)
                                <td>
                                    <a class="btn btn-danger" href="{{ route('update', $item->id) }}">Update</a>
                                    <form class="d-inline" action="{{ route('delete', $item->id) }}"
                                        onsubmit="return confirm('Apakah yakin ingin dihapus?')" method="POST">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-warning">Delete</button>
                                    </form>
                                </td>
                            @endif
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>

 <form class="d-flex" role="search" action="{{ route('home') }}" method="GET">
            <input class="form-control me-2" type="search" placeholder="Search" value="{{Request::get('search')}}" aria-label="Search" name="search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
