<div class="form-group {{ $errors->has('artnr') ? 'has-error' : ''}}">
    <label for="artnr" class="control-label">{{ 'Artnr' }}</label>
    <input class="form-control" name="artnr" type="text" id="artnr" value="{{ isset($wzor->artnr) ? $wzor->artnr : ''}}" >
    {!! $errors->first('artnr', '<p class="help-block">:message</p>') !!}
</div>
<div class="form-group {{ $errors->has('bez') ? 'has-error' : ''}}">
    <label for="bez" class="control-label">{{ 'Bez' }}</label>
    <input class="form-control" name="bez" type="text" id="bez" value="{{ isset($wzor->bez) ? $wzor->bez : ''}}" >
    {!! $errors->first('bez', '<p class="help-block">:message</p>') !!}
</div>
<div class="form-group">
  <label for="typ">Typ</label>
  <select class="" name="typ">
    <option value="PCV" @if($wzor->typ == "PCV") selected @endif>PCV</option>
    <option value="INOX" @if($wzor->typ == "INOX") selected @endif>Inox</option>
    <option value="FI" @if($wzor->typ == "FI") selected @endif>Future Inox</option>
    <option value="GD" @if($wzor->typ == "GD") selected @endif>Glass Design</option>
  </select>
</div>


<div class="form-group">
    <input class="btn btn-primary" type="submit" value="{{ $formMode === 'edit' ? 'Update' : 'Create' }}">
</div>
