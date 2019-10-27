<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EventRequest extends FormRequest
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
            'start' => 'date_format:Y-m-d H:i:s|before:end',
            'end' => 'date_format:Y-m-d H:i:s|after:start',
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'Preencha o campo Título do Evento!',
            'title.min' => 'Título do Evento necessita ter pelo menos 03 caracteres!',
            'start.date_format' => 'Preencha uma Data Inicial com valor válido!',
            'start.before' => 'A Data/Hora Inicial deve ser menor que a Data Final!',
            'end.date_format' => 'Preencha uma Data Final com valor válido!',
            'end.after' => 'A Data/Hora Final deve ser maior que a Data Inicial!',
        ];
    }

}
