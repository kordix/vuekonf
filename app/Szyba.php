<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Szyba extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'szybas';

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
      return $this->belongsToMany('App\Wzor','szyba_wzor');
    }

}
