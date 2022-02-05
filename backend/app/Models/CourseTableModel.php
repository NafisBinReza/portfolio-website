<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CourseTableModel extends Model
{
    protected $table = 'course_table';
    protected $primaryKey = 'id';
    public $incrementing = true;
    protected $keytype = 'int';
    public $timeStamps = false;
}
