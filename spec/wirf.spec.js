import wirf from '../src';

describe('wirf', () => {
  it('throws when invoked as function', () => {
    expect(() => {
      wirf('broken')();
    }).toThrow('broken');
  });

  it('throws when accessed as array', () => {
    expect(() => {
      wirf('broken')[0];
    }).toThrow('broken');
  });

  it('throws when property is accessed', () => {
    expect(() => {
      wirf('broken').foo;
    }).toThrow('broken');
  });

  it('throws when property is set', () => {
    expect(() => {
      wirf('broken').foo = 3;
    }).toThrow('broken');
  });
});
