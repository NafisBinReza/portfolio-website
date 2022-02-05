<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ServiceModel extends Model
{
    protected $table = 'service_table';
    protected $primaryKey = 'id';
    public $incrementing = true;
    protected $keytype = 'int';
    public $timeStamps = false;
}
