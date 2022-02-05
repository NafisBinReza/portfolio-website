<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChartDataModel extends Model
{
    protected $table = 'chart_data';
    protected $primaryKey = 'id';
    public $incrementing = true;
    protected $keytype = 'int';
    public $timeStamps = false;
}
