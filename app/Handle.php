<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Handle extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'handles';

    /**
    * The database primary key value.
    *
    * @var string
    */
    protected $primaryKey = 'id';

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['artnr', 'bez'];

    public function wzory(){
      return $this->belongsToMany('App\Wzor','handle_wzor');
    }


}
