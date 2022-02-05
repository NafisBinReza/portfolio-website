<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HomeEtcModel extends Model
{
    protected $table = 'homepage_etc';
    protected $primaryKey = 'id';
    public $incrementing = true;
    protected $keytype = 'int';
    public $timeStamps = false;
}
