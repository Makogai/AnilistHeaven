<?php
 
namespace App\Traits;
use Illuminate\Http\Request;

trait FileHandling {
 
    public static function storeFile( $file, $directory = 'unknown' ) {
 
        if( $file ) { 
            //return $request->file($fieldname)->store('images/' . $directory, 'public');

            $destinationPath = '/images/' . $directory . '/';
            $fileName = $file->getClientOriginalName();
            $filenameCover = time() . $fileName;
            $file->move(public_path() . $destinationPath, $filenameCover);
            return $destinationPath . $filenameCover;
        }
 
        return null;
 
    }
 
}