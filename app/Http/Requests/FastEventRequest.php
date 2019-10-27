<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FastEventRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|min:3',
            'start' => 'date_format:H:i:s|before:end',
            'end' => 'date_format:H:i:s|after:start',
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'Preencha o campo Título do Evento',
            'title.min' => 'Título do Evento necessita ter pelo menos 03 caracteres!',
            'start.date_format' => 'Preencha a Hora Inicial com valor válido!',
            'start.before' => 'A Hora Inicial deve ser menor que a Hora Final!',
            'end.date_format' => 'Preencha a Hora Final com valor válido!',
            'end.after' => 'A Hora Final deve ser maior que a Hora Inicial!',
        ];
    }
}
