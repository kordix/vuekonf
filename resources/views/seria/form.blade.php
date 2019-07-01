<div class="form-group {{ $errors->has('artnr') ? 'has-error' : ''}}">
    <label for="artnr" class="control-label">{{ 'Artnr' }}</label>
    <input class="form-control" name="artnr" type="text" id="artnr" value="{{ isset($serium->artnr) ? $serium->artnr : ''}}" >
    {!! $errors->first('artnr', '<p class="help-block">:message</p>') !!}
</div>
<div class="form-group {{ $errors->has('bez') ? 'has-error' : ''}}">
    <label for="bez" class="control-label">{{ 'Bez' }}</label>
    <input class="form-control" name="bez" type="text" id="bez" value="{{ isset($serium->bez) ? $serium->bez : ''}}" >
    {!! $errors->first('bez', '<p class="help-block">:message</p>') !!}
</div>


<div class="form-group">
    <input class="btn btn-primary" type="submit" value="{{ $formMode === 'edit' ? 'Update' : 'Create' }}">
</div>
