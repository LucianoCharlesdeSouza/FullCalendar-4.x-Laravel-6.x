<?php

namespace App\Http\Controllers;

use App\FastEvent;
use App\Http\Requests\FastEventRequest;
use Illuminate\Http\Request;

class FastEventController extends Controller
{
    public function store(FastEventRequest $request)
    {
        $fastEvent = FastEvent::create($request->all());

        return response()->json(['created' => $fastEvent->id]);
    }

    public function update(FastEventRequest $request)
    {
        $event = FastEvent::where('id', $request->id)->first();

        $event->fill($request->all());

        $event->save();

        return response()->json(['updated' => $event->id]);
    }

    public function destroy(Request $request)
    {
        FastEvent::where('id', $request->id)->delete();

        return response()->json(true);
    }
}
