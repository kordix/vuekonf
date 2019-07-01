<div class="form-group {{ $errors->has('artnr') ? 'has-error' : ''}}">
    <label for="artnr" class="control-label">{{ 'Artnr' }}</label>
    <input class="form-control" name="artnr" type="text" id="artnr" value="{{ isset($handle->artnr) ? $handle->artnr : ''}}" >
    {!! $errors->first('artnr', '<p class="help-block">:message</p>') !!}
</div>
<div class="form-group {{ $errors->has('bez') ? 'has-error' : ''}}">
    <label for="bez" class="control-label">{{ 'Bez' }}</label>
    <input class="form-control" name="bez" type="text" id="bez" value="{{ isset($handle->bez) ? $handle->bez : ''}}" >
    {!! $errors->first('bez', '<p class="help-block">:message</p>') !!}
</div>

<div class="form-group {{ $errors->has('TYP') ? 'has-error' : ''}}">
    <label for="bez" class="control-label">{{ 'Typ' }}</label>
    <input class="form-control" name="typ" type="text" id="typ" value="{{ isset($handle->typ) ? $handle->typ : ''}}" >
    {!! $errors->first('bez', '<p class="help-block">:message</p>') !!}
</div>


<div class="form-group">
    <input class="btn btn-primary" type="submit" value="{{ $formMode === 'edit' ? 'Update' : 'Create' }}">
</div>
